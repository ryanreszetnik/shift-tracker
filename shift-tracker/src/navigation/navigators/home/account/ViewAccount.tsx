import React from "react";
import ViewAccountPage from "@features/profile/screens/ViewAccount";
import { AccountStackPropList } from "@navParams/home/account";
export default function ViewAccount({
  navigation,
}: AccountStackPropList<"ViewAccount">) {
  const logout = () => {
    navigation.navigate("Auth", { screen: "SignIn" });
  };
  return <ViewAccountPage logout={logout} />;
}
