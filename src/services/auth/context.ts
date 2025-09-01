import { createContext } from "react";

export type AuthContextData = {
  isSignedIn: boolean;
  signIn: () => void;
  signOut: () => void;
};

export const AUTH_CONTEXT = createContext<AuthContextData | null>(null);
