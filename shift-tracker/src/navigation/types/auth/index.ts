import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackNavigationProps } from "../root";

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type NavigationProps<Screen extends keyof AuthStackParamList> =
  CompositeNavigationProp<
    NativeStackNavigationProp<AuthStackParamList, Screen>,
    RootStackNavigationProps
  >;

export type AuthStackPropList<Screen extends keyof AuthStackParamList> = {
  navigation: NavigationProps<Screen>;
  route: RouteProp<AuthStackParamList, Screen>;
};
