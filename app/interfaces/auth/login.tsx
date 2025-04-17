interface LoginPayload {
    value: string;
    password: string;
}

interface LoginResponse {
  status: number;
  error: boolean;
  message: string;
  data: {
    token: string;
    refresh_token: string;
    user: {
        id: string;
        name: string;
        email: string;
        phone: string;
        role: string;
        access: string;
        enabled: boolean;
    };
  };
}
