import { createContext, useContext } from 'react';

interface IAuthContext {
  userId: string,
  setUser: (id: string) => void
}

export const AuthContext = createContext<IAuthContext>({ userId: '', setUser: (id) => id });

export function useAuth() {
  return useContext(AuthContext);
}
