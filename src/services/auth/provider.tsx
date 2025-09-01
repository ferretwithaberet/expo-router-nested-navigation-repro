import Storage from "expo-sqlite/kv-store";
import React, { useState } from "react";
import { AUTH_CONTEXT } from "./context";

const STORE_KEY = "is-signed-in";
const AuthProvider = (props: React.PropsWithChildren) => {
  const [isSignedIn, _setIsSignedIn] = useState(() => {
    const storeValue = Storage.getItemSync(STORE_KEY);

    if (!storeValue) return false;

    return JSON.parse(storeValue);
  });

  const handleSignedInChange = (value: boolean) => {
    _setIsSignedIn(value);
    Storage.setItemAsync(STORE_KEY, JSON.stringify(value));
  };

  const signIn = () => handleSignedInChange(true);

  const signOut = () => handleSignedInChange(false);

  return <AUTH_CONTEXT {...props} value={{ isSignedIn, signIn, signOut }} />;
};

export default AuthProvider;
