export interface LoginType {
  userName: string;
  email: string;
  password: string;
  role: string;
}

export interface ProviderProps {
  user: string | null;
  token: string;
  login: (data: LoginType) => void;
  logout: () => void;
}
