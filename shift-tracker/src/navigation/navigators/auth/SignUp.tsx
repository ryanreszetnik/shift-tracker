import React from "react";
import SignUpPage from "@features/authentication/screens/SignUp";
import { AuthStackPropList } from "@navParams/auth";

export default function SignUp({ navigation }: AuthStackPropList<"SignUp">) {
  return <SignUpPage />;
}
