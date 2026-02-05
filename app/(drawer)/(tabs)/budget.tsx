import { useBudgetStore } from "@/src/store/budget-store";
import { generateBudget } from "@/src/utils/budget-math";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BudgetScreen() {
  const router = useRouter();

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
                <Text key={sub.id} style={styles.subcategory}>
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
    top: 10,
    left: 0,
    right: 0,
    color: "#0bed3f",
    fontSize: 24,
    fontWeight: "700",
    marginTop: 1,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    color: "#1410e9",
    marginTop: 0,
    marginVertical: 4,
    fontWeight: "600",
  },
  subcategory: {
    fontSize: 16,
    color: "#01040b",
    marginLeft: 12,
    marginTop: 4,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    margin: 12,
  },
});
