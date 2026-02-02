import "react-native-gesture-handler";

import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "../src/shared/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "(onboarding)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Onboarding flow */}
        <Stack.Screen name="(onboarding)" />

        {/* Main app (Drawer + Tabs) */}
        <Stack.Screen name="(drawer)" />

        {/* Modal screens */}
        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal",
            headerShown: true,
            title: "Modal",
          }}
        />
      </Stack>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
