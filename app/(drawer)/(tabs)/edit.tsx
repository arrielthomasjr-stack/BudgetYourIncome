import { useThemeColor } from "@/src/shared/hooks/use-theme-color";
import { useBudgetStore } from "@/src/store/budget-store";
import { validateTotalPercentage } from "@/src/utils/budget-math";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function EditScreen() {
  const router = useRouter();
  const categories = useBudgetStore((s) => s.customCategories);

  const handleSave = () => {
    if (!validateTotalPercentage(categories)) {
      alert("Percentages must total 100%");
      return;
    }
    router.back();
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
          Edit Your Budget Details
        </Text>
        <Pressable onPress={handleSave} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
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
  saveButton: {
    position: "absolute",
    top: 100,
    left: 16,
    padding: 10,
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  saveButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
