import { useBudgetStore } from "@/src/store/budget-store";
import { Redirect, Stack } from "expo-router";

export default function OnboardingLayout() {
  const income = useBudgetStore((s) => s.monthlyIncome);

  if (income) {
    return <Redirect href="/(drawer)/(tabs)/budget" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
