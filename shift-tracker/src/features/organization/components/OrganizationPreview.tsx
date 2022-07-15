import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import StyledText from "@components/StyledText";
import { useTheme } from "@react-navigation/native";

export default function OrganizationPreview({ name }: { name: string }) {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={{ ...styles.container, backgroundColor: colors.card }}
    >
      <StyledText style={styles.orgName}>{name}</StyledText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    height: 45,
    padding: 10,
  },
  orgName: {
    fontSize: 18,
  },
});
