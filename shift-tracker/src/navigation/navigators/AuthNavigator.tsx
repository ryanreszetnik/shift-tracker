import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import { AuthStackParamList } from "@navParams/auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: true, title: "Create Account" }}
      />
    </Stack.Navigator>
  );
}
