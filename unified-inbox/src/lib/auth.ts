import { BetterAuth } from "better-auth";
import { PrismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";

// This is the main configuration object for Better Auth.
// It connects the auth service to our Prisma database.
export const {
  auth, // The main middleware and API route handler
  signIn,
  signOut,
  updateUser,
  getSession,
  setSession,
  clearSession,
} = BetterAuth({
  // We pass our singleton Prisma client instance
  adapter: PrismaAdapter(prisma),
  
  // We read the secret key from the .env file
  // This is used to encrypt user session cookies
  secret: process.env.AUTH_SECRET,
  
  // Tell Better Auth which fields in our User model correspond to what
  // This matches the schema we created in `prisma/schema.prisma`
  fields: {
    email: "email",
    hashedPassword: "hashedPassword",
    userId: "id",
  },
  
  // Define the names of the Prisma models
  model: {
    user: "user",
    session: "session",
  },
});
