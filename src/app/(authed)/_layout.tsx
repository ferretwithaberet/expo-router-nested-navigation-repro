import { useAuth } from "@/services/auth";
import { Redirect, Slot } from "expo-router";

const AuthedLayout = () => {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) return <Redirect href="/auth/login" />;

  return <Slot />;
};

export default AuthedLayout;
