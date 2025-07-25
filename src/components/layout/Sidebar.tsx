"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, UserCog, PanelLeft } from "lucide-react";
import { useSidebar } from "@/hooks/useSidebar";
import { useSidebarCollapse } from "@/hooks/useSidebarCollapse";

export default function Sidebar() {
  const pathname = usePathname();
  const { managementOpen, toggleManagement } = useSidebar(true);
  const { isCollapsed, toggleSidebar } = useSidebarCollapse(false);

  // Define navigation structure
  const managementItems = [
    { name: "User Management", href: "/management/user" },
    { name: "Role Management", href: "/management/role" },
    { name: "Audit Log", href: "/management/audit" },
    { name: "Access Log", href: "/management/access" },
  ];
  return (
    <div
      className={`flex flex-col h-screen ${
        isCollapsed ? "w-20" : "w-64"
      } bg-white border-r border-gray-200 transition-all duration-300`}
    >
      <div className="flex items-center h-[80px] px-6 border-b border-gray-200">
        <div className={isCollapsed ? "mx-auto" : "ml-auto"}>
          <div
            className={`flex items-center justify-center flex items-center justify-center w-8 h-8 border border-gray-200 rounded-lg cursor-pointer transition-all`}
            onClick={toggleSidebar}
          >
            <PanelLeft className="h-5 w-5 text-black" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4">
        {/* Home */}
        <Link
          href="/home"
          className={`Montserrat text-sm font-medium relative flex items-center ${
            isCollapsed ? "justify-center" : "px-6"
          } py-2 rounded-sm transition-colors mb-1
          ${
            pathname === "/home"
              ? "Montserrat text-sm font-medium h-[54px] w-full mx-auto bg-blue-50 text-black"
              : "text-black hover:bg-gray-100 h-[54px]"
          }`}
        >
          {/* Short blue bar, vertically centered */}
          {pathname === "/home" && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-blue-300 rounded-r-sm" />
          )}
          <House className="h-5 w-5 text-black-900" />
          {!isCollapsed && <span className="flex-1 ml-3">Home</span>}
        </Link>

        {/* Management (collapsible) */}
        <div>
          <div
            className={`Montserrat text-sm font-medium flex items-center w-full h-[54px] ${
              isCollapsed ? "justify-center" : "px-6"
            } py-2 rounded-lg transition-colors text-black hover:bg-gray-100 focus:outline-none cursor-pointer`}
            onClick={toggleManagement}
          >
            <UserCog className="h-5 w-5 text-black" />
            {!isCollapsed && <span className="flex-1 ml-3">Management</span>}
            {!isCollapsed && (
              <span className="ml-auto">{managementOpen ? "▾" : "▸"}</span>
            )}
          </div>
          {managementOpen && (
            <div className="mt-1 space-y-1">
              {managementItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`Montserrat text-sm font-medium flex items-center w-full h-[54px] ${
                      isCollapsed ? "justify-center" : "px-6"
                    } py-2 rounded-lg transition-colors focus:outline-none relative
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
                    {!isCollapsed && (
                      <span className="flex-1">{item.name}</span>
                    )}
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
      {!isCollapsed && (
        <div className="border-t px-6 py-3">
          <p className="text-[10px] text-gray-400">COPYRIGHT.....</p>
        </div>
      )}
    </div>
  );
}
