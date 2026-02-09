import { useBudgetStore } from "@/src/store/budget-store";
import { generateBudget } from "@/src/utils/budget-math";
import { CATEGORY_COLORS } from "@/src/utils/category-colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InsightsScreen() {
  // const router = useRouter();

  const income = useBudgetStore((s) => s.monthlyIncome);
  const strategy = useBudgetStore((s) => s.strategy);

  if (!income) return null;

  const categories = generateBudget(income, strategy);

  const piedata = categories.map((c) => ({
    name: c.name,
    population: c.amount,
    color: CATEGORY_COLORS[c.name] ?? "#999",
    legendFontColor: "#fdf9f9",
    legendFontSize: 20,
    legendFontWeight: "600",
  }));

  return (
    <LinearGradient
      colors={["#6B11D8", "#3A006E", "#050205"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Your Financial Insights</Text>
        <View style={styles.chartContainer}>
          <PieChart
            data={piedata}
            width={Dimensions.get("window").width}
            height={420}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="100"
            chartConfig={{ color: () => "#000" }}
            hasLegend={false}
          ></PieChart>
        </View>
        <View style={styles.legendContainer}>
          {piedata.map((item) => (
            <View key={item.name} style={styles.legendItem}>
              <View
                style={[styles.legendColor, { backgroundColor: item.color }]}
              />
              <Text style={styles.legendText}>
                {item.name} (${item.population})
              </Text>
            </View>
          ))}
        </View>
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
    top: 10,
    left: 0,
    right: 0,
    fontSize: 26,
    fontWeight: "700",
    marginTop: 1,
    textAlign: "center",
    color: "#26f805",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#0954ea",
    marginTop: 8,
  },
  chartContainer: {
    marginTop: 5,
    alignItems: "center",
  },
  legendContainer: {
    marginTop: 16,
    paddingHorizontal: 100,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  legendColor: {
    width: 20,
    height: 20,
  },
  legendText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#ffffff",
  },
});
