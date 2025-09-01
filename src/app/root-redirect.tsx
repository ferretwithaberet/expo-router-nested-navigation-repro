import { Redirect, useLocalSearchParams } from "expo-router";

const RootRedirect = () => {
  const { href, ...params } = useLocalSearchParams();

  return <Redirect href={{ pathname: href as any, params }} />;
};

export default RootRedirect;
