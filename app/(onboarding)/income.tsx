import { useThemeColor } from "@/src/shared/hooks/use-theme-color";
import { useBudgetStore } from "@/src/store/budget-store";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
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
    <LinearGradient
      colors={["#6B11D8", "#3A006E", "#050205"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </Pressable>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View>
            <Text
              style={[styles.title, { color: useThemeColor({}, "brandGreen") }]}
            >
              Monthly Income
            </Text>
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
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
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
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 24,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 24,
    color: "#ffffff",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#fff",
    textAlign: "center",
    marginBottom: 12,
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
