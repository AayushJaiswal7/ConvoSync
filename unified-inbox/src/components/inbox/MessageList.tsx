import { cn } from "@/lib/utils";

// 1. Mock data as per the plan
const MOCK_MESSAGES = [
  {
    id: "1",
    sender: "Jane Doe",
    body: "Hey! Just checking in. Did you get the proposal I sent over?",
    timestamp: "10:30 AM",
  },
  {
    id: "2",
    sender: "You",
    body: "Hi Jane! Yes, I did. Looks great. I just have a few questions.",
    timestamp: "10:31 AM",
  },
  {
    id: "3",
    sender: "Jane Doe",
    body: "Sounds good! See you then.",
    timestamp: "10:32 AM",
  },
];

export function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="flex flex-col gap-4">
        {MOCK_MESSAGES.map((message) => {
          const isUser = message.sender === "You";
          return (
            <div
              key={message.id}
              className={cn(
                "flex max-w-xs flex-col gap-1 md:max-w-md",
                isUser ? "self-end" : "self-start"
              )}
            >
              <div
                className={cn(
                  "rounded-lg p-3 text-sm",
                  isUser
                    ? "rounded-br-none bg-primary text-primary-foreground"
                    : "rounded-bl-none bg-muted"
                )}
              >
                <p>{message.body}</p>
              </div>
              <span
                className={cn(
                  "text-xs text-muted-foreground",
                  isUser ? "self-end" : "self-start"
                )}
              >
                {message.sender} • {message.timestamp}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}