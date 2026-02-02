import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BudgetStrategy, useBudgetStore } from "@/src/store/budget-store";

export default function StrategyScreen() {
  const router = useRouter();

  const strategy = useBudgetStore((state) => state.strategy);
  const setStrategy = useBudgetStore((state) => state.setStrategy);

  const strategies: {
    key: BudgetStrategy;
    title: string;
    description: string;
  }[] = [
    {
      key: "50-30-20",
      title: "50 / 30 / 20",
      description: "Simple and balanced budgeting method.",
    },
    {
      key: "zero-based",
      title: "Zero-Based Budget",
      description: "Every dollar is assigned a job.",
    },
    {
      key: "custom",
      title: "Custom",
      description: "Create your own category percentages.",
    },
  ];

  const handleContinue = () => {
    router.replace("/(drawer)/(tabs)/budget");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </Pressable>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Choose a Budget Strategy</Text>
          <Text style={styles.subtitle}>
            Pick the method that best fits your lifestyle.
          </Text>

          {strategies.map((item) => (
            <Pressable
              key={item.key}
              style={[styles.card, strategy === item.key && styles.cardSelected]}
              onPress={() => setStrategy(item.key)}
            >
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </Pressable>
          ))}
        </View>

        <Pressable style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Finish Setup</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  backButton: {
    marginLeft: 16,
    marginTop: 8,
    padding: 8,
    alignSelf: "flex-start",
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 40,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
    backgroundColor: "#ffffff",
  },
  cardSelected: {
    borderColor: "#2563eb",
    backgroundColor: "#eff6ff",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: "#555",
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 24,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
