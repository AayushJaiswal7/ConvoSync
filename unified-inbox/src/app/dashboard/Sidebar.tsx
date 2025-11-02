import { Inbox, BarChart, Settings } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Sidebar() {
  // TODO: Add active link highlighting later
  const pathname = "/dashboard/inbox"; // Placeholder for active state

  const navItems = [
    {
      href: "/dashboard/inbox",
      label: "Inbox",
      icon: Inbox,
      active: pathname === "/dashboard/inbox",
    },
    {
      href: "/dashboard/analytics",
      label: "Analytics",
      icon: BarChart,
      // active: pathname === "/dashboard/analytics",
    },
    {
      href: "/dashboard/settings",
      label: "Settings",
      icon: Settings,
      // active: pathname === "/dashboard/settings",
    },
  ];

  return (
    <aside className="hidden h-screen w-64 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground sm:flex">
      <div className="flex h-16 items-center justify-center border-b border-sidebar-border px-6">
        {/* Placeholder for Logo */}
        <Link href="/dashboard" className="text-lg font-semibold">
          ConvoSync
        </Link>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  item.active
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
