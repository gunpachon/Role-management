// // API base URL - you can configure this based on your environment
// const API_BASE_URL =
//   process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

// // Types for role data
// export interface Role {
//   id: string;
//   name: string;
//   description: string;
//   permissions: string[];
//   status: "active" | "inactive";
//   createdBy: string;
//   createdAt: string;
//   updatedBy: string;
//   updatedAt: string;
// }

// export interface RoleSearchCriteria {
//   name?: string;
//   status?: string;
//   page?: number;
//   limit?: number;
// }

// // API functions for role management
// export const roleApi = {
//   // Get roles with search criteria
//   getRoles: async (
//     criteria: RoleSearchCriteria = {}
//   ): Promise<{ roles: Role[]; total: number }> => {
//     const params = new URLSearchParams();
//     Object.entries(criteria).forEach(([key, value]) => {
//       if (value) params.append(key, value.toString());
//     });

//     const response = await fetch(`${API_BASE_URL}/roles?${params}`);
//     if (!response.ok) {
//       throw new Error("Failed to fetch roles");
//     }
//     return response.json();
//   },

//   // Get single role by ID
//   getRoleById: async (id: string): Promise<Role> => {
//     const response = await fetch(`${API_BASE_URL}/roles/${id}`);
//     if (!response.ok) {
//       throw new Error("Failed to fetch role");
//     }
//     return response.json();
//   },

//   // Create new role
//   createRole: async (
//     roleData: Omit<Role, "id" | "createdAt" | "updatedAt">
//   ): Promise<Role> => {
//     const response = await fetch(`${API_BASE_URL}/roles`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(roleData),
//     });
//     if (!response.ok) {
//       throw new Error("Failed to create role");
//     }
//     return response.json();
//   },

//   // Update role
//   updateRole: async (id: string, roleData: Partial<Role>): Promise<Role> => {
//     const response = await fetch(`${API_BASE_URL}/roles/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(roleData),
//     });
//     if (!response.ok) {
//       throw new Error("Failed to update role");
//     }
//     return response.json();
//   },

//   // Delete role
//   deleteRole: async (id: string): Promise<void> => {
//     const response = await fetch(`${API_BASE_URL}/roles/${id}`, {
//       method: "DELETE",
//     });
//     if (!response.ok) {
//       throw new Error("Failed to delete role");
//     }
//   },

//   // Get all permissions (for role creation/editing)
//   getPermissions: async (): Promise<string[]> => {
//     const response = await fetch(`${API_BASE_URL}/permissions`);
//     if (!response.ok) {
//       throw new Error("Failed to fetch permissions");
//     }
//     return response.json();
//   },
// };
