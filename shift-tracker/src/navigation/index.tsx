import { ColorSchemeName } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigators";
import { DarkTheme, LightTheme } from "@constants/theme";
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : LightTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
