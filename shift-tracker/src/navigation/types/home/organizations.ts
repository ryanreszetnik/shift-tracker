import { Organization } from "@constants/types";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { HomeTabsNavigationProps } from ".";

export type OrganizationsStackParamList = {
  ViewAllOrganizations: undefined;
  CreateOrganization: undefined;
  ViewOrganization: { organization: Organization };
};

type NavigationProps<Screen extends keyof OrganizationsStackParamList> =
  CompositeNavigationProp<
    NativeStackNavigationProp<OrganizationsStackParamList, Screen>,
    HomeTabsNavigationProps<"Organizations">
  >;

export type OrganizationsStackPropList<
  Screen extends keyof OrganizationsStackParamList
> = {
  navigation: NavigationProps<Screen>;
  route: RouteProp<OrganizationsStackParamList, Screen>;
};
export type OrganizationStackScreenProps<
  Screen extends keyof OrganizationsStackParamList
> = NativeStackScreenProps<OrganizationsStackParamList, Screen>;
