export default function InboxPage() {
  return (
    <div className="flex h-full flex-col">
      <h2 className="text-2xl font-semibold">Welcome to your Inbox</h2>
      <p className="text-muted-foreground">
        This is where your unified inbox page will live.
      </p>
      {/* According to your file structure, this page will later
        be composed of components like:
        - ContactsList.tsx (which will live in the Sidebar)
        - ChatHeader.tsx
        - MessageList.tsx
        - MessageComposer.tsx
      */}
    </div>
  );
}