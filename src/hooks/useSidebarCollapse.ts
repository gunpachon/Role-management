import { useState } from "react";

export function useSidebarCollapse(initial = false) {
  const [isCollapsed, setIsCollapsed] = useState(initial);
  const toggleSidebar = () => setIsCollapsed((prev) => !prev);
  return { isCollapsed, toggleSidebar };
}
