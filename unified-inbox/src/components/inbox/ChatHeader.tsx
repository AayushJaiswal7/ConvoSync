import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Phone, Video, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      {/* Contact Info */}
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 border">
          <AvatarImage
            src="https://placehold.co/100x100/A9A9A9/FFFFFF?text=JD"
            alt="Jane Doe"
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          {/* Hard-coded contact name as per the plan */}
          <h2 className="text-lg font-semibold">Jane Doe</h2>
          <p className="text-sm text-muted-foreground">
            +1 234 567 890 (SMS)
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        {/* These are placeholders and won't do anything yet */}
        <Button variant="ghost" size="icon">
          <Phone className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Video className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Info className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
}