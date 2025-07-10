// // API base URL - you can configure this based on your environment
// const API_BASE_URL =
//   process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

// // Types for user data
// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   status: "active" | "inactive" | "pending";
//   createdBy: string;
//   createdAt: string;
//   updatedBy: string;
//   updatedAt: string;
// }

// export interface UserSearchCriteria {
//   name?: string;
//   email?: string;
//   role?: string;
//   status?: string;
//   page?: number;
//   limit?: number;
// }

// // API functions for user management
// export const userApi = {
//   // Get users with search criteria
//   getUsers: async (
//     criteria: UserSearchCriteria = {}
//   ): Promise<{ users: User[]; total: number }> => {
//     const params = new URLSearchParams();
//     Object.entries(criteria).forEach(([key, value]) => {
//       if (value) params.append(key, value.toString());
//     });

//     const response = await fetch(`${API_BASE_URL}/users?${params}`);
//     if (!response.ok) {
//       throw new Error("Failed to fetch users");
//     }
//     return response.json();
//   },

//   // Get single user by ID
//   getUserById: async (id: string): Promise<User> => {
//     const response = await fetch(`${API_BASE_URL}/users/${id}`);
//     if (!response.ok) {
//       throw new Error("Failed to fetch user");
//     }
//     return response.json();
//   },

//   // Create new user
//   createUser: async (
//     userData: Omit<User, "id" | "createdAt" | "updatedAt">
//   ): Promise<User> => {
//     const response = await fetch(`${API_BASE_URL}/users`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });
//     if (!response.ok) {
//       throw new Error("Failed to create user");
//     }
//     return response.json();
//   },

//   // Update user
//   updateUser: async (id: string, userData: Partial<User>): Promise<User> => {
//     const response = await fetch(`${API_BASE_URL}/users/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(userData),
//     });
//     if (!response.ok) {
//       throw new Error("Failed to update user");
//     }
//     return response.json();
//   },

//   // Delete user
//   deleteUser: async (id: string): Promise<void> => {
//     const response = await fetch(`${API_BASE_URL}/users/${id}`, {
//       method: "DELETE",
//     });
//     if (!response.ok) {
//       throw new Error("Failed to delete user");
//     }
//   },
// };
