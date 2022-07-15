import { ShiftsStackParamList } from "@navParams/home/shifts";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewAllShifts from "./shifts/ViewAllShifts";

const Stack = createNativeStackNavigator<ShiftsStackParamList>();

export default function ShiftsStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ViewAllShifts"
        component={ViewAllShifts}
        options={{ headerShown: true, title: "Shifts" }}
      />
    </Stack.Navigator>
  );
}
