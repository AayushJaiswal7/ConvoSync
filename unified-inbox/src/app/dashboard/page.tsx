// 1. Import the new components
import { ContactsList } from "@/components/inbox/ContactsList";
import { ChatHeader } from "@/components/inbox/ChatHeader";
import { MessageList } from "@/components/inbox/MessageList";
import { MessageComposer } from "@/components/inbox/MessageComposer";

export default function InboxPage() {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {" "}
      {/* 100vh minus Topbar height (4rem = h-16) */}
      {/* 2. Assemble the components */}
      
      {/* Contact List */}
      <ContactsList />

      {/* Chat Area */}
      <div className="flex flex-1 flex-col">
        {/* Chat Header */}
        <ChatHeader />

        {/* Message List (scrollable) */}
        <MessageList />

        {/* Message Composer */}
        <MessageComposer />
      </div>
    </div>
  );
}