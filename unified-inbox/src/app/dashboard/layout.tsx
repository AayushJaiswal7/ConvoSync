import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar - visible on sm and up */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col">
        {/* Topbar - sticky */}
        <Topbar />

        {/* Main Content - scrollable */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
