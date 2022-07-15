import { View, Text, TextInput, KeyboardTypeOptions } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

export default function CustomTextInput({
  title,
  onChange,
  background = false,
  placeholder,
  keyboardType = "default",
}: {
  title?: string;
  onChange: (text: string) => void;
  background?: boolean;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
}) {
  const { colors } = useTheme();
  return (
    <View
      style={
        background
          ? { ...styles.container, backgroundColor: colors.card }
          : styles.background
      }
    >
      {title && <Text style={styles.title}>{title}</Text>}
      <TextInput
        onChangeText={onChange}
        placeholder={placeholder}
        style={{
          ...styles.input,
          backgroundColor: colors.background,
          color: colors.text,
        }}
        keyboardType={keyboardType}
        secureTextEntry={keyboardType === "visible-password"}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { borderRadius: 10, padding: 10, margin: 10 },
  background: { marginHorizontal: 20 },
  title: { fontSize: 20, marginLeft: 5 },
  input: {
    borderRadius: 5,
    padding: 10,
    margin: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#999",
  },
});
