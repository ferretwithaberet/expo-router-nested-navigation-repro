import { useAuth } from "@/services/auth";
import { Stack } from "expo-router";
import { Button, Text, View } from "react-native";
import tw from "twrnc";

const Profile = () => {
  const { signOut } = useAuth();

  return (
    <View style={tw`flex-1 p-5`}>
      <Stack.Screen options={{ title: "Profile" }} />

      <View style={tw`flex-1`}>
        <Text>You are signed in.</Text>
      </View>

      <Button title="Sign out" onPress={signOut} />
    </View>
  );
};

export default Profile;
