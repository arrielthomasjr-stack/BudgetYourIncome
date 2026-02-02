import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

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

  return (
    <View style={styles.container}>
      {/* App Title */}
      <View style={styles.header}>
        <Text style={styles.title}>Budget Your Income</Text>
        <Text style={styles.subtitle}>Build a budget that fits your life</Text>
      </View>

      {/* Value Proposition */}
      <View style={styles.content}>
        <Text style={styles.description}>
          Get recommended spending percentages based on your income and
          lifestyle. Start simple with the 50/30/20 rule, then customize it as
          you go.
        </Text>
      </View>

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
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },
  header: {
    marginTop: 80,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
  },
  content: {
    marginTop: 32,
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 32,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
