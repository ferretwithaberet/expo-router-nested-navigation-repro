import { ParamsSchema } from "@/utils/params";
import { useParsedLocalParams } from "@/utils/router";
import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

const TabOneIndex = () => {
  const params = useParsedLocalParams(ParamsSchema);
  const { tenantId, role } = params;

  return (
    <View>
      <Stack.Screen options={{ title: "Tab 1" }} />

      <Text>TabOneIndex</Text>

      <Text>Params: {JSON.stringify(params, null, 2)}</Text>

      <Link
        href={{
          pathname: "/[tenantId]/[role]/tab1",
          params: { tenantId, role, queryParam: "test" },
        }}
      >
        Go to same route with query param
      </Link>

      <Link
        href={{
          pathname: "/root-redirect",
          params: {
            href: "/[tenantId]/[role]/tab1",
            tenantId,
            role,
            queryParam: "test",
          },
        }}
      >
        Root redirect to same route with query param
      </Link>
    </View>
  );
};

export default TabOneIndex;
