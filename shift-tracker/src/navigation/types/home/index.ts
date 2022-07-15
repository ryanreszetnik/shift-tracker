import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { RootStackNavigationProps } from "../root";
import { AccountStackParamList } from "./account";
import { OrganizationsStackParamList } from "./organizations";
import { UpcomingStackParamList } from "./upcoming";
import { ShiftsStackParamList } from "./shifts";

export type HomeTabsParamList = {
  Organizations: NavigatorScreenParams<OrganizationsStackParamList>;
  Upcoming: NavigatorScreenParams<UpcomingStackParamList>;
  Shifts: NavigatorScreenParams<ShiftsStackParamList>;
  Account: NavigatorScreenParams<AccountStackParamList>;
};

export type HomeTabsNavigationProps<Tab extends keyof HomeTabsParamList> =
  CompositeNavigationProp<
    BottomTabNavigationProp<HomeTabsParamList, Tab>,
    RootStackNavigationProps
  >;
