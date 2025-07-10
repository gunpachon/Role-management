const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    refresh_token: string;
    expires_at: number;
    user: {
      id: string;
      email: string;
      first_name: string;
      last_name: string;
      roles: {
        role_id: string;
        role_code: string;
        role_name: string;
        is_active: boolean;
        is_delete: boolean;
        role_description: string;
        created_by: string;
      }[];
    };
  };
}

export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
  console.log("API_BASE_URL:", API_BASE_URL);
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": "en",
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Login failed");
  }

  return response.json();
}
