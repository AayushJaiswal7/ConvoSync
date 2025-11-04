import { BetterAuth } from "better-auth";
import { PrismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";


export const {
  auth, // The main middleware and API route handler
  signIn,
  signOut,
  updateUser,
  getSession,
  setSession,
  clearSession,
} = BetterAuth({
 
  adapter: PrismaAdapter(prisma),
 
  secret: process.env.AUTH_SECRET,
  
  
  fields: {
    email: "email",
    hashedPassword: "hashedPassword",
    userId: "id",
  },
  
 
  model: {
    user: "user",
    session: "session",
  },
});
