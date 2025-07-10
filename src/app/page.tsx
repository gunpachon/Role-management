"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page when accessing the root
    router.push("/auth/login");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Role Management System
        </h1>
        <p className="text-gray-600">Redirecting to login...</p>
        {/* Debug: Show the value of NEXT_PUBLIC_API_URL */}
        <div className="mt-4 p-2 bg-yellow-100 text-yellow-800 rounded">
          NEXT_PUBLIC_API_URL:{" "}
          {process.env.NEXT_PUBLIC_API_URL?.toString() || "undefined"}
        </div>
      </div>
    </div>
  );
}
