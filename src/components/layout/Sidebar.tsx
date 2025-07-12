"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, UserCog } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [managementOpen, setManagementOpen] = useState(true);

  // Define navigation structure
  const managementItems = [
    { name: "User Management", href: "/management/user" },
    { name: "Role Management", href: "/management/role" },
    { name: "Audit Log", href: "/management/audit-log" },
    { name: "Access Log", href: "/management/access-log" },
  ];
  return (
    <div className="flex flex-col h-screen w-64 bg-white border-r border-gray-200">
      <div className="flex items-center h-[80px] px-6 border-b border-gray-200 px-6">
        <div className="ml-auto">
          {/* Placeholder for the top-right icon */}
          <div className="w-6 h-6 border rounded flex items-center justify-center">
            <span className="text-xs text-gray-400 ">▢</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        {/* Home */}
        <Link
          href="/home"
          className={`Montserrat text-sm font-medium relative flex items-center px-6 py-2 rounded-sm transition-colors mb-1
          ${
            pathname === "/home"
              ? "Montserrat text-sm font-medium h-[54px] bg-blue-50 text-black"
              : "text-black hover:bg-gray-100 h-[54px]"
          }`}
        >
          {/* Short blue bar, vertically centered */}
          {pathname === "/home" && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-blue-300 rounded-r-sm" />
          )}
          <House className="h-5 w-5 mr-3 text-black-900" />
          Home
        </Link>

        {/* Management (collapsible) */}
        <div>
          <div
            className="Montserrat text-sm font-medium flex items-center w-full h-[54px] px-6 py-2 rounded-lg transition-colors text-black hover:bg-gray-100 focus:outline-none cursor-pointer"
            onClick={() => setManagementOpen((open) => !open)}
          >
            <UserCog className="h-5 w-5 mr-3 text-black" />
            <span>Management</span>
            <span className="ml-auto">{managementOpen ? "▾" : "▸"}</span>
          </div>
          {managementOpen && (
            <div className="mt-1 space-y-1">
              {managementItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`Montserrat text-sm font-medium flex items-center w-full h-[54px] px-6 py-2 rounded-lg transition-colors focus:outline-none relative
                      ${
                        isActive
                          ? "bg-blue-50 text-black"
                          : "text-black hover:bg-gray-100"
                      }
                    `}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-blue-300 rounded-r-sm" />
                    )}
                    <UserCog className="h-5 w-5 mr-3 invisible" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Copyright */}
      <div className="border-t px-6 py-3">
        <p className="text-[10px] text-gray-400">COPYRIGHT.....</p>
      </div>
    </div>
  );
}
