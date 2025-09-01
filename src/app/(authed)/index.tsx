import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const params = { tenantId: 1, role: "user" };
  return (
    <SafeAreaView>
      <Link href={{ pathname: "/[tenantId]/[role]/tab1", params }}>
        Go to tabs
      </Link>

      <Link
        href={{
          pathname: "/[tenantId]/[role]/[queryParam]/tab1",
          params: { ...params, queryParam: "none" },
        }}
      >
        Go to tabs with [queryParam]
      </Link>
    </SafeAreaView>
  );
};

export default Index;
