// Imports from ShadCN UI components
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Twilio Credentials</CardTitle>
          <CardDescription>
            Enter your Twilio Account SID, Auth Token, and phone number.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="account-sid">Account SID</Label>
              <Input
                id="account-sid"
                placeholder="AC..."
                defaultValue="ACxxxxxxxxxxxxxxxxxxxxxxxx"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="auth-token">Auth Token</Label>
              <Input
                id="auth-token"
                type="password"
                placeholder="Your auth token"
                defaultValue="••••••••••••••••••••••••"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone-number">Twilio Phone Number</Label>
              <Input
                id="phone-number"
                placeholder="+1234567890"
                defaultValue="+1234567890"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          {/* This button is static for now */}
          <Button>Save Credentials</Button>
        </CardFooter>
      </Card>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>Application Settings</CardTitle>
          <CardDescription>
            Manage general application settings.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between space-y-2">
            <div>
              <Label htmlFor="sandbox-mode">Sandbox Mode</Label>
              <p className="text-sm text-muted-foreground">
                Enable sandbox mode to use test credentials.
              </p>
            </div>
            {/* This switch is static for now */}
            <Switch id="sandbox-mode" defaultChecked={true} />
          </div>
        </CardContent>
        <CardFooter className="border-t px-6 py-4">
          <Button>Save Settings</Button>
        </CardFooter>
      </Card>
    </div>
  );
}