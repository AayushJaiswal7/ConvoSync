import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { twilioClient, twilioPhoneNumber } from "@/lib/twilio";
import { getSession } from "@/lib/auth"; // We'll use this to get the logged-in user

// This route handles sending an outbound message
export async function POST(request: Request) {
  try {
    // 1. Check for a valid user session
    const session = await getSession();
    if (!session?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // 2. Parse the request body
    const { body, contactId } = await request.json();
    if (!body || !contactId) {
      return new NextResponse("Missing message body or contact ID", {
        status: 400,
      });
    }

    // 3. Find the contact in the database
    const contact = await prisma.contact.findUnique({
      where: { id: contactId },
    });
    if (!contact) {
      return new NextResponse("Contact not found", { status: 404 });
    }

    // 4. Send the message via Twilio
    const twilioMessage = await twilioClient.messages.create({
      body: body,
      from: twilioPhoneNumber,
      to: contact.phoneNumber, // The contact's phone number (e.g., "whatsapp:+1...")
    });

    // 5. Save the outbound message to our database
    const newMessage = await prisma.message.create({
      data: {
        body: body,
        direction: "outbound", // This message is going OUT
        sid: twilioMessage.sid, // Store Twilio's message ID
        contactId: contact.id, // Link to the contact
        userId: session.userId, // Link to the user who sent it
      },
    });

    // 6. Return the newly created message to the frontend
    // This allows the UI to update optimistically
    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error("Send Message Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}