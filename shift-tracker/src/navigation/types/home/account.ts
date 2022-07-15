import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { HomeTabsNavigationProps } from ".";

export type AccountStackParamList = {
  ViewAccount: undefined;
};

type NavigationProps<Screen extends keyof AccountStackParamList> =
  CompositeNavigationProp<
    NativeStackNavigationProp<AccountStackParamList, Screen>,
    HomeTabsNavigationProps<"Account">
  >;

export type AccountStackPropList<Screen extends keyof AccountStackParamList> = {
  navigation: NavigationProps<Screen>;
  route: RouteProp<AccountStackParamList, Screen>;
};
