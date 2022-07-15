import {
  OrganizationsStackParamList,
  OrganizationStackScreenProps,
} from "@navParams/home/organizations";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateOrganization from "./organizations/CreateOrganization";
import ViewAllOrganizations from "./organizations/ViewAllOrganizations";
import ViewOrganization from "./organizations/ViewOrganization";

const Stack = createNativeStackNavigator<OrganizationsStackParamList>();

export default function OrganizationsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ViewAllOrganizations"
        component={ViewAllOrganizations}
        options={{ headerShown: true, title: "Organizations" }}
      />
      <Stack.Screen
        name="CreateOrganization"
        component={CreateOrganization}
        options={{ headerShown: true, title: "Create Organization" }}
      />
      <Stack.Screen
        name="ViewOrganization"
        component={ViewOrganization}
        options={({
          route,
        }: OrganizationStackScreenProps<"ViewOrganization">) => ({
          headerShown: true,
          title: route.params.organization.name,
        })}
      />
    </Stack.Navigator>
  );
}
