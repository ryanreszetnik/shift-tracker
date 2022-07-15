import { View, Text, Button } from "react-native";
import React from "react";

export default function ViewAccount({ logout }: { logout: () => void }) {
  return (
    <View>
      <Text>ViewAccount</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
