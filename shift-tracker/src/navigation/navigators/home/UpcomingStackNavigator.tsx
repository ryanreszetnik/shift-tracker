import { UpcomingStackParamList } from "@navParams/home/upcoming";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ViewAllUpcoming from "./upcoming/ViewAllUpcoming";

const Stack = createNativeStackNavigator<UpcomingStackParamList>();

export default function UpcomingStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ViewAllUpcoming"
        component={ViewAllUpcoming}
        options={{ headerShown: true, title: "Upcoming" }}
      />
    </Stack.Navigator>
  );
}
