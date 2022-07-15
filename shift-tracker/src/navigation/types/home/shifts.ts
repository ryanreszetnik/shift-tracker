import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeTabsNavigationProps } from ".";

export type ShiftsStackParamList = {
  ViewAllShifts: undefined;
};

type NavigationProps<Screen extends keyof ShiftsStackParamList> =
  CompositeNavigationProp<
    NativeStackNavigationProp<ShiftsStackParamList, Screen>,
    HomeTabsNavigationProps<"Shifts">
  >;

export type ShiftsStackPropList<Screen extends keyof ShiftsStackParamList> = {
  navigation: NavigationProps<Screen>;
  route: RouteProp<ShiftsStackParamList, Screen>;
};
