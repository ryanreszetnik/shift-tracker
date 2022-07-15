import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";

export default function TabBarIcon(props: {
  icon: React.ComponentProps<typeof FontAwesomeIcon>["icon"];
  color: string;
}) {
  return <FontAwesomeIcon size={30} style={{ marginBottom: -3 }} {...props} />;
}
