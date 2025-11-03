import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendHorizonal, Paperclip } from "lucide-react";

export function MessageComposer() {
  return (
    <div className="border-t bg-background px-6 py-4">
      <form className="flex items-center gap-3">
        {/* Attachment button placeholder */}
        <Button variant="ghost" size="icon" type="button">
          <Paperclip className="h-5 w-5" />
        </Button>
        <Input
          type="text"
          placeholder="Type your message..."
          className="flex-1"
        />
        {/* Send button (static as per plan) */}
        <Button type="submit">
          <span>Send</span>
          <SendHorizonal className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}