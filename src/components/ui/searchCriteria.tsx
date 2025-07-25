"use client";
import React from "react";
import useSearchCriteria from "@/hooks/useSearchCriteria";
import { Eraser, Search } from "lucide-react";

type Field =
  | { type: "text"; label: string; name: string; placeholder?: string }
  | {
      type: "select";
      label: string;
      name: string;
      options: string[];
      placeholder?: string;
    };

interface SearchCriteriaProps {
  fields: Field[];
  onSearch: (values: Record<string, string>) => void;
  onClear: () => void;
}

const SearchCriteria: React.FC<SearchCriteriaProps> = ({
  fields,
  onSearch,
  onClear,
}) => {
  const { values, handleChange, handleClear } = useSearchCriteria();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(values);
  };

  return (
    <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg">
      <div className="Montserrat mb-4 font-semibold text-lg">
        Search Criteria
      </div>
      <hr className="mb-6 border-t border-gray-200" />
      <div className="grid grid-cols-4 gap-4">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col">
            <label className="Montserrat mb-1 text-sm font-medium text-gray-700">
              {field.label}
            </label>
            {field.type === "text" ? (
              <input
                type="text"
                name={field.name}
                placeholder={field.placeholder || ""}
                value={values[field.name] || ""}
                onChange={handleChange}
                className={`Montserrat border rounded px-3 py-2 text-sm placeholder:text-gray-400 ${
                  values[field.name] ? "text-gray-800" : "text-gray-300"
                }`}
              />
            ) : (
              <select
                name={field.name}
                value={values[field.name] || ""}
                onChange={handleChange}
                className={`Montserrat border border-gray-300 rounded px-3 py-2 text-sm ${
                  values[field.name] ? "text-gray-900" : "text-gray-400"
                }`}
                aria-label={field.label}
              >
                <option value="" className="text-gray-400">
                  {field.placeholder || `Select ${field.label}`}
                </option>
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-end space-x-2 col-span-4 justify-end mt-2">
        <button
          type="button"
          onClick={() => {
            handleClear();
            onClear();
          }}
          className="Montserrat border px-4 w-30 py-2 rounded text-[var(--primary)] border-[var(--primary)] flex items-center"
        >
          <Eraser className="mr-1" /> Clear
        </button>
        <button
          type="submit"
          className="Montserrat border px-4 py-2 rounded text-[var(--primary)] border-[var(--primary)] flex items-center"
        >
          <Search className="mr-1" /> Search
        </button>
      </div>
    </form>
  );
};

export type { Field };

export default SearchCriteria;
