import { useThemeColor } from "@/src/shared/hooks/use-theme-color";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen() {
  const router = useRouter();

  const handleCreateAccount = () => {
    router.push("/(onboarding)/create-account");
  };

  const handleLogin = () => {
    router.push("/(onboarding)/login");
  };

  const handleGetStarted = () => {
    router.push("/(onboarding)/income");
  };

  const brandGreen = useThemeColor({}, "brandGreen");

  return (
    <LinearGradient
      colors={["#6B11D8", "#3A006E", "#050205"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        {/* App Title */}
        <View style={styles.header}>
          <Text style={[styles.title, { color: brandGreen }]}>
            Budget{"\n"}Your{"\n"}Income{"\n"}
          </Text>
          <Text style={styles.subtitle}>
            Build a budget that fits your life!
          </Text>
        </View>

        {/* Value Proposition */}
        {/* Value Proposition (moved to bottom) */}

        {/* CTA */}
        <Pressable style={styles.button} onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>Create Account</Text>
        </Pressable>

        {/* CTA */}
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        {/* CTA */}
        <Pressable style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>

        <View style={styles.content}>
          <Text style={styles.description}>
            Get recommended spending percentages based on your income and
            lifestyle. Start simple with the 50/30/20 rule, then customize it as
            you go.
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "space-evenly",
    backgroundColor: "transparent",
  },
  safeArea: {
    flex: 1,
  },
  header: {
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#19B319",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: "#ffffff",
  },
  content: {
    marginBottom: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    fontSize: 20,
    color: "#ffffff",
    lineHeight: 32,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 42,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
