import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav
      className={`Montserrat flex items-center text-lg ${className || ""}`}
      aria-label="Breadcrumb"
    >
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span key={item.label} className="flex items-center">
            {item.href && !isLast ? (
              <Link href={item.href} className="text-gray-500 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span
                className={
                  isLast ? "text-black" : "text-gray-500"
                }
              >
                {item.label}
              </span>
            )}
            {!isLast && (
              <svg
                className="mx-2 w-4 h-5 text-black-500 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
