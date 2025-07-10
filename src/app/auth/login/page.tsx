"use client";

import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-light)] dark:bg-[var(--bg-dark)]">
      <div className="w-full max-w-[400px] bg-white dark:bg-[var(--secondary)] rounded-2xl shadow-2xl p-13 flex flex-col items-center">
        <h1 className="Montserrat text-4xl font-bold text-[var(--text-primary)] dark:text-[var(--text-primary-dark)] mb-2 tracking-tight">
          RoleWise
        </h1>
        <p className="Montserrat text-lg text-[var(--text-secondary)] dark:text-[var(--text-primary-dark)] mb-8">
          Please login to continue
        </p>
        <form className="w-full space-y-6">
          <div>
            <label className="Montserrat block mb-1 font-medium text-[var(--text-primary)] dark:text-[var(--text-primary-dark)]">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="Montserrat w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 dark:text-[var(--text-primary-dark)]"
            />
          </div>
          <div>
            <label className="Montserrat block mb-1 font-medium text-[var(--text-primary)]  dark:text-[var(--text-primary-dark)]">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="Montserrat w-full border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 pr-10 dark:text-[var(--text-primary-dark)]"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-600 hover:text-gray-600 focus:outline-none focus-visible:outline-none focus:ring-0 appearance-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeClosed className="w-5 h-5 outline-none focus:outline-none focus:ring-0" />
                ) : (
                  <Eye className="w-5 h-5 outline-none focus:outline-none focus:ring-0" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="Montserrat w-full bg-[var(--primary)] dark:bg-[var(--primary-light)] text-white font-semibold py-2 rounded-lg shadow hover:bg-[var(--primary-light)] transition"
          >
            Login
          </button>
        </form>
        <a
          href="#"
          className="Montserrat mt-6 text-[var(--text-primary)] hover:underline text-sm"
        >
          Forgot Password
        </a>
      </div>
    </div>
  );
}
