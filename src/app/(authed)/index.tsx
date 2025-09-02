// In the real project this is just a <Redirect /> to the first tab of the <Tabs /> navigator
import { Link } from "expo-router";
import { Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

const Index = () => {
  const params = { tenantId: 1, role: "user" };

  return (
    <SafeAreaView style={tw`flex-1 gap-5 items-center justify-center`}>
      <Link href={{ pathname: "/[tenantId]/[role]/tab1", params }}>
        <View style={tw`pointer-events-none`}>
          <Button title="Go to tabs" />
        </View>
      </Link>

      <Link
        href={{
          pathname: "/[tenantId]/[role]/[queryParam]/tab1",
          params: { ...params, queryParam: "none" },
        }}
      >
        <View style={tw`pointer-events-none`}>
          <Button title="Go to tabs with [queryParam]" />
        </View>
      </Link>
    </SafeAreaView>
  );
};

export default Index;
