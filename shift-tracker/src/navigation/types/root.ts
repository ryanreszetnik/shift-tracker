import { NavigatorScreenParams } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { AuthStackParamList } from "./auth";
import { HomeTabsParamList } from "./home";

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Home: NavigatorScreenParams<HomeTabsParamList>;
};

export type RootStackScreenProps = NativeStackScreenProps<RootStackParamList>;
export type RootStackNavigationProps =
  NativeStackNavigationProp<RootStackParamList>;
