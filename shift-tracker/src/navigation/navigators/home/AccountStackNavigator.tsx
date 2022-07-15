import { AccountStackParamList } from "@navParams/home/account";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewAccount from "./account/ViewAccount";

const Stack = createNativeStackNavigator<AccountStackParamList>();

export default function AccountStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ViewAccount"
        component={ViewAccount}
        options={{ headerShown: true, title: "Profile" }}
      />
    </Stack.Navigator>
  );
}
