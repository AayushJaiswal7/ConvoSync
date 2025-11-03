import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getSession } from "@/lib/auth"; // For user authentication

// This route handles fetching all messages for a specific contact
export async function GET(request: Request) {
  try {
    // 1. Check for a valid user session
    const session = await getSession();
    if (!session?.userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // 2. Get the contactId from the query parameters
    const { searchParams } = new URL(request.url);
    const contactId = searchParams.get("contactId");

    if (!contactId) {
      return new NextResponse("Missing contactId query parameter", {
        status: 400,
      });
    }

    // 3. Find all messages for this contact, ordered by when they were created
    const messages = await prisma.message.findMany({
      where: {
        contactId: contactId,
      },
      orderBy: {
        createdAt: "asc", // Order them chronologically (oldest first)
      },
    });

    // 4. Return the messages
    return NextResponse.json(messages);
  } catch (error) {
    console.error("Get Messages Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}