export interface AuthState {
  isAuthenticated: boolean;
  user: User;
}

export interface User {
  name: string;
  id: number;
  ratedMedia: { id: number; rating: number }[];
}
