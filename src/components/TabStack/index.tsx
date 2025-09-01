import { Stack, useLocalSearchParams } from "expo-router";
import Header from "../Header";

// For some reason, when passing `href` to `Tabs.Screen` with params to use,
// the first time the screen renders it has no params,
// this component fixes that behavior
const TabStack = () => {
  const params = useLocalSearchParams();

  if (!Object.keys(params).length) return null;

  return <Stack screenOptions={{ header: (props) => <Header {...props} /> }} />;
};

export default TabStack;
