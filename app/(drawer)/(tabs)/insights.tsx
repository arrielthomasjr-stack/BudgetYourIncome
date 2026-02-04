import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, StyleSheet, Text } from "react-native";
// import { useRouter } from "expo-router";
import { useBudgetStore } from "@/src/store/budget-store";
import { generateBudget } from "@/src/utils/budget-math";
import { PieChart } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InsightsScreen() {
  const income = useBudgetStore((s) => s.monthlyIncome);
  const strategy = useBudgetStore((s) => s.strategy);

  if (!income) return null;

  const categories = generateBudget(income, strategy);

  const data = categories.map((c) => ({
    name: c.name,
    population: c.amount,
    color: "#2563eb",
    legendFontColor: "#333",
    legendFontSize: 14,
  }));

  return (
    <LinearGradient
      colors={["#6B11D8", "#3A006E", "#050205"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Your Financial Insights</Text>
        <Text style={{ textAlign: "center", marginVertical: 12 }}>
          Budget Breakdown
        </Text>
        <PieChart
          data={data}
          width={Dimensions.get("window").width}
          height={220}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  safeArea: {
    flex: 1,
  },
  title: {
    position: "absolute",
    top: 50,
    left: 0,
    right: 0,
    fontSize: 24,
    fontWeight: "700",
    color: "brandGreen",
    marginTop: 1,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 8,
  },
});
