/* eslint-disable @next/next/no-img-element */
"use client";

import { Bell, CircleUserRound } from "lucide-react";

export default function TopBar() {
  return (
    <div className="flex h-[80px] w-full items-center justify-between bg-white border-b border-gray-200 px-6">
      <div className="flex items-center space-x-3">
        <img src="/angle.svg" alt="Rolewise Logo" width={30} height={30} />
        <h1 className="Montserrat text-2xl font-bold text-[var(--text-primary)]">
          RoleWise
        </h1>
      </div>

      {/* Right side - User info and notifications */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button
          className="relative flex items-center justify-center w-9 h-9 rounded-full bg-[#F5F8FA] hover:bg-blue-100 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5 text-[#205493]" />
        </button>
        {/* Divider */}
        <div className="h-8 w-px bg-[#E3E8EF]" />

        {/* User info */}
        <div className="flex items-center space-x-3">
          <button
            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#F5F8FA] hover:bg-blue-100 transition-colors"
            aria-label="User profile"
          >
            <CircleUserRound className="h-5 w-5 text-[#205493]" />
          </button>
          <div className="text-left">
            <p className="Montserrat text-sm font-medium text-black-900">
              Name Surname
            </p>
            <p className="Montserrat text-xs text-gray-500">Position</p>
          </div>
        </div>
      </div>
    </div>
  );
}