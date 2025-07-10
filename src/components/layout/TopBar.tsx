"use client";

import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function TopBar() {
  return (
    <div className="flex h-16 items-center justify-between bg-white border-b border-gray-200 px-6">
      {/* Logo */}
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-gray-900">
          Role Management System
        </h1>
      </div>

      {/* Right side - User info and notifications */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button
          className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Notifications"
        >
          <BellIcon className="h-6 w-6" />
          {/* Notification badge */}
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User info */}
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
          <button
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="User profile"
          >
            <UserCircleIcon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
