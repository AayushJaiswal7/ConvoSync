import { UserCircle } from "lucide-react";

export function Topbar() {
  return (
    <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b border-border bg-background px-6">
      <div>
        {/* Placeholder for Breadcrumbs or Page Title */}
        <h1 className="text-lg font-semibold">Inbox</h1>
      </div>
      <div>
        {/* Placeholder for User Avatar/Menu */}
        <UserCircle className="h-8 w-8 text-muted-foreground" />
      </div>
    </header>
  );
}
