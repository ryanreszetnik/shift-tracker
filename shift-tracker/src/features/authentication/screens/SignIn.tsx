import { Button, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-navigation";
import CustomTextInput from "@components/CustomTextInput";

export default function SignIn({
  toSignUp,
  login,
}: {
  toSignUp: () => void;
  login: (email: string, password: string) => void;
}) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <View
        style={{
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <CustomTextInput
          onChange={setEmail}
          placeholder="Email"
          keyboardType="email-address"
        />
        <CustomTextInput
          onChange={setPassword}
          placeholder="Password"
          keyboardType="visible-password"
        />
        <Button title="To Sign Up" onPress={toSignUp} />
        <Button title="Login" onPress={() => login(email, password)} />
      </View>
    </SafeAreaView>
  );
}
