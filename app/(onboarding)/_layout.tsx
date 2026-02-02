import { useBudgetStore } from "@/src/store/budget-store";
import { Redirect, Stack } from "expo-router";

export default function OnboardingLayout() {
  const income = useBudgetStore((s) => s.monthlyIncome);

  if (income) {
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
