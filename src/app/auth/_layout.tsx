import { useAuth } from "@/services/auth";
import { Redirect, Slot } from "expo-router";

const AuthLayout = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) return <Redirect href="/" />;

  return <Slot />;
};

export default AuthLayout;
