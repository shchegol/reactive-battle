import { createContext, useContext } from 'react';

export interface AuthContextType {
  userId: string,
  setUser: (id: string) => void
}

export const AuthContext = createContext<AuthContextType>({ userId: '', setUser: (id) => id });

export function useAuth() {
  return useContext(AuthContext);
}
