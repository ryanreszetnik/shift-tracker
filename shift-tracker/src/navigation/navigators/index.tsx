import { RootStackParamList } from "@navParams/root";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./AuthNavigator";
import HomeTabNavigator from "./HomeTabNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
