import { useThemeColor } from "@/src/shared/hooks/use-theme-color";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const router = useRouter();

  const handleIncome = () => {
    router.replace({
      pathname: "/(onboarding)/income",
      params: { t: Date.now() },
    }); // forces remount
  };
  return (
    <LinearGradient
      colors={["#6B11D8", "#3A006E", "#050205"]}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <Text
          style={[styles.title, { color: useThemeColor({}, "brandGreen") }]}
        >
          Manage Your Profile
        </Text>
        <Pressable style={styles.button} onPress={handleIncome}>
          <Text style={styles.buttonText}>Go to Income</Text>
        </Pressable>
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
    marginTop: 1,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 8,
  },
  button: {
    position: "absolute",
    top: 100,
    left: 16,
    padding: 10,
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
