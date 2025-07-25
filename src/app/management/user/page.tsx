"use client";
import MainLayout from "@/components/layout/MainLayout";
import Breadcrumb from "@/components/ui/breadcrumb";
import SearchCriteria from "@/components/ui/searchCriteria";

export default function UserManagementPage() {
  const fields = [
    {
      type: "text" as const,
      label: "Name",
      name: "name",
      placeholder: "Enter Name",
    },
    {
      type: "text" as const,
      label: "Email",
      name: "email",
      placeholder: "Enter Email",
    },
    {
      type: "select" as const,
      label: "Role",
      name: "role",
      options: ["Admin", "User"],
      placeholder: "Select Role",
    },
    {
      type: "select" as const,
      label: "Status",
      name: "status",
      options: ["Active", "Inactive"],
      placeholder: "Select Status",
    },
    {
      type: "select" as const,
      label: "Lock Status",
      name: "lockStatus",
      options: ["Locked", "Unlocked"],
      placeholder: "Select Lock Status",
    },
    {
      type: "select" as const,
      label: "Created by",
      name: "createdBy",
      options: ["Admin", "User"],
      placeholder: "Select Name",
    },
    {
      type: "select" as const,
      label: "Updated By",
      name: "updatedBy",
      options: ["Admin", "User"],
      placeholder: "Select Name",
    },
  ];

  const handleSearch = (values: Record<string, string>) => {
    // TODO: Implement search logic
    console.log("Search values:", values);
  };

  const handleClear = () => {
    // TODO: Implement clear logic
    console.log("Cleared search criteria");
  };

  return (
    <MainLayout>
      <h1 className="Montserrat text-[var(--text-primary-dark)] text-2xl font-bold">
        User Management
      </h1>
      <Breadcrumb
        className="mt-2"
        items={[
          { label: "Management", href: "/management" },
          { label: "User Management" },
        ]}
      />
      <div className="mt-8">
        <SearchCriteria
          fields={fields}
          onSearch={handleSearch}
          onClear={handleClear}
        />
      </div>
    </MainLayout>
  );
}
