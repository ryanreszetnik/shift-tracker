import { Text, TextStyle } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

export default function StyledText({
  style,
  children,
}: {
  style?: TextStyle;
  children?: React.ReactNode;
}) {
  const { colors } = useTheme();
  return <Text style={{ color: colors.text, ...style }}>{children}</Text>;
}
