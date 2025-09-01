import { Stack } from "expo-router";
import { Text, View } from "react-native";

const TabTwoIndex = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Tab 2" }} />

      <Text>TabTwoIndex</Text>
    </View>
  );
};

export default TabTwoIndex;
