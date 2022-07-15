import {
  faList,
  faUser,
  faUserGroup,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { HomeTabsParamList } from "@navParams/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "src/components/TabBarIcon";
import AccountStackNavigator from "./home/AccountStackNavigator";
import OrganizationsStackNavigator from "./home/OrganizationsStackNavigator";
import ShiftsStackNavigator from "./home/ShiftsStackNavigator";
import UpcomingStackNavigator from "./home/UpcomingStackNavigator";

const BottomTab = createBottomTabNavigator<HomeTabsParamList>();

function HomeTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Organizations">
      <BottomTab.Screen
        name="Organizations"
        component={OrganizationsStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon icon={faUserGroup} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Upcoming"
        component={UpcomingStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon icon={faCalendar} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Shifts"
        component={ShiftsStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon icon={faList} color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Account"
        component={AccountStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon icon={faUser} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
export default HomeTabNavigator;
