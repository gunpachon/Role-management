import { useState } from "react";

export function useSidebar(initialOpen = true) {
  const [managementOpen, setManagementOpen] = useState(initialOpen);
  const toggleManagement = () => setManagementOpen((open) => !open);
  return { managementOpen, toggleManagement };
}
