import React from "react";
import SignInPage from "@features/authentication/screens/SignIn";
import { AuthStackPropList } from "@navParams/auth";

export default function SignIn({ navigation }: AuthStackPropList<"SignIn">) {
  const toSignUp = () => {
    navigation.navigate("SignUp");
  };
  const login = () => {
    navigation.navigate("Home", {
      screen: "Todo",
      params: { screen: "ViewAllTodos" },
    });
  };
  return <SignInPage toSignUp={toSignUp} login={login} />;
}
