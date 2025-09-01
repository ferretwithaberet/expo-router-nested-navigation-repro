import { useAuth } from "@/services/auth";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const Login = () => {
  const { signIn } = useAuth();

  return (
    <SafeAreaView style={tw`flex-1 justify-center p-5`}>
      <Button title="Login" onPress={signIn} />
    </SafeAreaView>
  );
};

export default Login;
