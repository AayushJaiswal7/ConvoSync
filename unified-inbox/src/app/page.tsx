// Imports from React and Next.js
import { MessageSquareText, Chrome } from "lucide-react"; // Using Chrome icon for Google

// Imports from ShadCN UI components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-background p-4">
      {/* 1. ConvoSync Logo (as per wireframe) */}
      <div className="mb-6 flex items-center gap-2">
        <MessageSquareText className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">ConvoSync</h1>
      </div>

      {/* 2. Card: Login Form (as per wireframe) */}
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {/* Email Input */}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>

            {/* Password Input */}
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>

            {/* Login Button */}
            {/* TODO: This button is static as per the plan */}
            <Button type="submit" className="w-full">
              Login
            </Button>

            {/* Divider */}
            <div className="relative my-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or
                </span>
              </div>
            </div>

            {/* Google Sign-in Button */}
            {/* TODO: This button is static as per the plan */}
            <Button variant="outline" className="w-full">
              <Chrome className="mr-2 h-4 w-4" />
              Sign in with Google
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}