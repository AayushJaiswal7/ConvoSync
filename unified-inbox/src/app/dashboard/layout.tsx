
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";
import { getSession } from "@/lib/auth"; // Import the server-side session helper
import { redirect } from "next/navigation"; // Import redirect
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Sidebar - visible on sm and up */}
      

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
