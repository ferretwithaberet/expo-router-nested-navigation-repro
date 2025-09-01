import { ParamsSchema } from "@/utils/params";
import { useParsedLocalParams } from "@/utils/router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Tabs } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

type MakeTabBarIconOptions = {
  color: string;
  size: number;
};

const makeTabBarIcon = (
  iconName: React.ComponentProps<typeof FontAwesome6>["name"]
) => {
  const TabBarIcon = (options: MakeTabBarIconOptions) => (
    <FontAwesome6 {...options} name={iconName} />
  );

  return TabBarIcon;
};

const TabsLayout = () => {
  const params = useParsedLocalParams(ParamsSchema);
  const { queryParam } = params;

  return (
    <SafeAreaView style={tw`flex-1`} edges={["top"]}>
      <Text>Tabs queryParam: {JSON.stringify(queryParam) ?? "undefined"}</Text>

      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="tab1"
          options={{
            // See `components/TabStack` for an issue with this option
            href: { pathname: "/[tenantId]/[role]/tab1", params },
            title: "Tab 1",
            tabBarIcon: makeTabBarIcon("1"),
          }}
        />

        <Tabs.Screen
          name="tab2"
          options={{
            // See `components/TabStack` for an issue with this option
            href: { pathname: "/[tenantId]/[role]/tab2", params },
            title: "Tab 2",
            tabBarIcon: makeTabBarIcon("2"),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            // See `components/TabStack` for an issue with this option
            href: { pathname: "/[tenantId]/[role]/profile", params },
            title: "Profile",
            tabBarIcon: makeTabBarIcon("user"),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;
