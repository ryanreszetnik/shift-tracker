import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeTabsNavigationProps } from ".";

export type UpcomingStackParamList = {
  ViewAllUpcoming: undefined;
};

type NavigationProps<Screen extends keyof UpcomingStackParamList> =
  CompositeNavigationProp<
    NativeStackNavigationProp<UpcomingStackParamList, Screen>,
    HomeTabsNavigationProps<"Upcoming">
  >;

export type UpcomingStackPropList<Screen extends keyof UpcomingStackParamList> =
  {
    navigation: NavigationProps<Screen>;
    route: RouteProp<UpcomingStackParamList, Screen>;
  };
