import { ParamsSchema } from "@/utils/params";
import { useParsedLocalParams } from "@/utils/router";
import { Picker } from "@react-native-picker/picker";
import {
  getHeaderTitle,
  Header as RNNHeader,
} from "@react-navigation/elements";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { useRouter } from "expo-router";
import { Text } from "react-native";
import tw from "twrnc";

const getRoleIdentifier = (tenantId: number, role: string) =>
  `${tenantId}-${role}`;

const OPTIONS = [
  {
    value: getRoleIdentifier(1, "user"),
    label: "Tenant 1 - User",
    tenantId: 1,
    role: "user",
  },

  {
    value: getRoleIdentifier(1, "admin"),
    label: "Tenant 1 - Admin",
    tenantId: 1,
    role: "admin",
  },

  {
    value: getRoleIdentifier(2, "user"),
    label: "Tenant 2 - User",
    tenantId: 2,
    role: "user",
  },

  {
    value: getRoleIdentifier(2, "admin"),
    label: "Tenant 2 - Admin",
    tenantId: 2,
    role: "admin",
  },
];

const Header = (props: NativeStackHeaderProps) => {
  const { options, route, back } = props;

  const router = useRouter();
  const { tenantId, role } = useParsedLocalParams(ParamsSchema);

  const selectedIdentifier = getRoleIdentifier(tenantId, role);
  console.log("Current role", selectedIdentifier);
  return (
    <RNNHeader
      {...options}
      headerStyle={{ height: 180 }}
      back={back}
      title={getHeaderTitle(options, route.name)}
      headerStatusBarHeight={0}
      headerTitle={() => (
        <>
          <Text>With router.redirect</Text>
          <Picker
            selectedValue={getRoleIdentifier(tenantId, role)}
            onValueChange={(_, index) => {
              const selectedOption = OPTIONS[index];
              console.log("Selected role", selectedOption.value);

              // Does not work as expo-router seems to try to navigate in the <Tabs /> navigator
              router.replace({
                pathname: "/[tenantId]/[role]/tab1",
                params: {
                  tenantId: selectedOption.tenantId,
                  role: selectedOption.role,
                },
              });
            }}
          >
            {OPTIONS.map((option) => (
              <Picker.Item key={option.value} {...option} />
            ))}
          </Picker>

          <Text>With redirect to root-redirect</Text>
          <Picker
            selectedValue={getRoleIdentifier(tenantId, role)}
            onValueChange={(_, index) => {
              const selectedOption = OPTIONS[index];
              console.log("Selected role", selectedOption.value);

              // Properly works, as it changes params at the root
              router.replace({
                pathname: "/root-redirect",
                params: {
                  href: "/[tenantId]/[role]/tab1",
                  tenantId: selectedOption.tenantId,
                  role: selectedOption.role,
                },
              });
            }}
          >
            {OPTIONS.map((option) => (
              <Picker.Item key={option.value} {...option} />
            ))}
          </Picker>
        </>
      )}
      headerTitleContainerStyle={tw`w-full`}
    />
  );
};

export default Header;
