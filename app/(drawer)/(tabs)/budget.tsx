import { LinearGradient } from "expo-linear-gradient";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { useBudgetStore } from "@/src/store/budget-store";
import { generateBudget } from "@/src/utils/budget-math";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BudgetScreen() {
  const income = useBudgetStore((s) => s.monthlyIncome);

  const strategy = useBudgetStore((s) => s.strategy);

  if (!income || !strategy) {
    return null; // or a loading / empty state
  }

  const categories = generateBudget(income!, strategy);

  return (
    <LinearGradient
      colors={["#6B11D8", "#3A006E", "#050205"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Budget Overview</Text>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.subtitle}>
                {item.name} – ${item.amount}
              </Text>

              {item.subcategories?.map((sub) => (
                <Text key={sub.id}>
                  • {sub.name}: ${sub.amount}
                </Text>
              ))}
            </View>
          )}
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
    color: "brandGreen",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 1,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 8,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    padding: 16,
    margin: 12,
  },
});
