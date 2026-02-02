import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useBudgetStore } from "@/src/store/budget-store";

export default function IncomeScreen() {
  const router = useRouter();

  // Local UI state
  const [incomeInput, setIncomeInput] = useState<string>("");

  // Zustand action
  const setIncome = useBudgetStore((state) => state.setIncome);

  const parsedIncome = Number(incomeInput);
  const isValid = !isNaN(parsedIncome) && parsedIncome > 0;

  const handleContinue = () => {
    if (!isValid) return;

    // Save to global state
    setIncome(parsedIncome);

    // Move to next onboarding step
    router.push("/(onboarding)/strategy");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </Pressable>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View>
          <Text style={styles.title}>Monthly Income</Text>
          <Text style={styles.subtitle}>
            Enter your average monthly income before taxes.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="e.g. 5000"
            keyboardType="numeric"
            value={incomeInput}
            onChangeText={setIncomeInput}
            autoFocus
          />
        </View>

        <Pressable
          style={[styles.button, !isValid && styles.buttonDisabled]}
          onPress={handleContinue}
          disabled={!isValid}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
      </KeyboardAvoidingView>
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
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 16,
    fontSize: 18,
    marginTop: 24,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 24,
  },
  buttonDisabled: {
    backgroundColor: "#94a3b8",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
