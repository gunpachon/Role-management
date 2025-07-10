"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  UsersIcon,
  ShieldCheckIcon,
  ClipboardDocumentListIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navigation: NavItem[] = [
  { name: "Home", href: "/login", icon: HomeIcon },
  { name: "User Management", href: "/users", icon: UsersIcon },
  { name: "Role Management", href: "/roles", icon: ShieldCheckIcon },
  { name: "Audit Log", href: "/audit-log", icon: ClipboardDocumentListIcon },
  { name: "Access Log", href: "/access-log", icon: ArrowRightOnRectangleIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-gray-900">
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-gray-800">
        <h1 className="text-xl font-bold text-white">Role Management</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              <item.icon
                className={`mr-3 h-6 w-6 flex-shrink-0 ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 group-hover:text-gray-300"
                }`}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* User info at bottom */}
      <div className="border-t border-gray-800 p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-gray-600 flex items-center justify-center">
              <span className="text-sm font-medium text-white">U</span>
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">User Name</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
}
