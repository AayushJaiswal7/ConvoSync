import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// 1. Mock data as per the plan
const MOCK_CONTACTS = [
  {
    id: "1",
    name: "Jane Doe",
    lastMessage: "Sounds good! See you then.",
    avatar: "https://placehold.co/100x100/A9A9A9/FFFFFF?text=JD",
    initials: "JD",
  },
  {
    id: "2",
    name: "John Smith",
    lastMessage: "Can you resend that file?",
    avatar: "https://placehold.co/100x100/D3D3D3/FFFFFF?text=JS",
    initials: "JS",
  },
  {
    id: "3",
    name: "Alice Johnson",
    lastMessage: "Got it, thanks!",
    avatar: "https://placehold.co/100x100/B0C4DE/FFFFFF?text=AJ",
    initials: "AJ",
  },
];

// This will be the currently selected contact. We'll make this dynamic later.
const SELECTED_CONTACT_ID = "1";

export function ContactsList() {
  return (
    <aside className="hidden h-full w-72 flex-col border-r bg-sidebar text-sidebar-foreground sm:flex">
      {/* Header for the contact list */}
      <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-6">
        <h2 className="text-lg font-semibold">Conversations</h2>
        {/* TODO: Placeholder for a "New Message" icon */}
      </div>

      {/* List of contacts */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-2">
          <ul className="space-y-1">
            {MOCK_CONTACTS.map((contact) => (
              <li key={contact.id}>
                <a
                  href="#" // In a real app, this would set the selected contact
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-md p-3 transition-colors",
                    contact.id === SELECTED_CONTACT_ID
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                  )}
                >
                  <Avatar className="h-10 w-10 border">
                    <AvatarImage src={contact.avatar} alt={contact.name} />
                    <AvatarFallback>{contact.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 overflow-hidden">
                    <h3 className="truncate text-sm font-medium">
                      {contact.name}
                    </h3>
                    <p className="truncate text-sm text-muted-foreground">
                      {contact.lastMessage}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}