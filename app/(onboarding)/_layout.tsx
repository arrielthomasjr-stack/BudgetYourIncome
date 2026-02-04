import { useBudgetStore } from "@/src/store/budget-store";
import { Redirect, Stack } from "expo-router";
import React from "react";

export default function OnboardingLayout() {
  const strategy = useBudgetStore((s) => s.strategy);

  if (strategy) {
    return <Redirect href="/(drawer)/(tabs)/budget" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="welcome">
      <Stack.Screen name="welcome" />
      <Stack.Screen name="login" />
      <Stack.Screen name="create-account" />
      <Stack.Screen name="income" />
      <Stack.Screen name="strategy" />
    </Stack>
  );
}
