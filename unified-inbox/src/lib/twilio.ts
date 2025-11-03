import twilio from "twilio";

// Get Twilio credentials from the .env file
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Validate that the credentials exist
if (!accountSid || !authToken) {
  throw new Error(
    "Twilio credentials (TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN) are not set in .env file"
  );
}

// Initialize the Twilio client
// We export this client so our API routes can use it
export const twilioClient = twilio(accountSid, authToken);

// We also export the Twilio phone number for easy access
export const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

if (!twilioPhoneNumber) {
  throw new Error(
    "Twilio phone number (TWILIO_PHONE_NUMBER) is not set in .env file"
  );
}
