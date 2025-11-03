import { NextResponse } from "next/server";
import { twiml } from "twilio"; // Twilio's helper to create TwiML responses
import prisma from "@/lib/prisma";

// This route handles ALL inbound messages from Twilio (SMS, WhatsApp)
export async function POST(request: Request) {
  try {
    // Twilio sends its data as 'x-www-form-urlencoded'
    // Next.js 14 can parse this with request.formData()
    const formData = await request.formData();
    const body = formData.get("Body") as string; // The message text
    const from = formData.get("From") as string; // The contact's phone number (e.g., "whatsapp:+1...")
    const to = formData.get("To") as string; // Your Twilio phone number

    if (!body || !from || !to) {
      return new NextResponse("Missing required webhook fields", {
        status: 400,
      });
    }

    // 1. Find or create the contact in our database
    // We use the 'From' number as the unique identifier
    const contact = await prisma.contact.upsert({
      where: { phoneNumber: from },
      update: {}, // No update needed if the contact already exists
      create: {
        phoneNumber: from,
        name: from, // We'll default the name to the phone number
      },
    });

    // 2. Save the new inbound message to our database
    await prisma.message.create({
      data: {
        body: body,
        direction: "inbound", // This message is coming IN
        contactId: contact.id, // Link it to the contact we just found/created
        // Note: We don't link an 'inbound' message to a 'User'
      },
    });

    // 3. Send an empty TwiML response back to Twilio
    // This tells Twilio "We got the message, thank you."
    const MessagingResponse = twiml.MessagingResponse;
    const twimlResponse = new MessagingResponse();

    // We're not sending a reply, so we just send an empty response.
    // twimlResponse.message("Thanks for your message!"); // <-- This would send a reply

    return new NextResponse(twimlResponse.toString(), {
      headers: {
        "Content-Type": "text/xml",
      },
    });
  } catch (error) {
    console.error("Twilio Webhook Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}