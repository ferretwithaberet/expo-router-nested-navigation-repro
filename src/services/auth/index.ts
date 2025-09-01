import { useContext } from "react";
import { AUTH_CONTEXT } from "./context";

export const useAuth = () => {
  const contextValue = useContext(AUTH_CONTEXT);

  if (!contextValue)
    throw new Error("useIsSignedIn used outside of AuthProvider");

  return contextValue;
};

export { AUTH_CONTEXT } from "./context";
export { default as AuthProvider } from "./provider";
