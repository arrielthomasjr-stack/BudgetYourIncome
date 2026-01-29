import { useRouter } from "expo-router";
import { Pressable, StyleSheet } from "react-native";

import { ThemedText } from "../src/shared/components/themed-text";
import { ThemedView } from "../src/shared/components/themed-view";

export default function BudgetCategoryModal() {
  const router = useRouter();

  const handleNavigateToEdit = () => {
    router.dismiss();
    router.push("/(drawer)/edit");
  };

  const handleNavigateToBudget = () => {
    router.dismiss();
    router.push("/(drawer)/(tabs)/budget");
  };

  return (
    <ThemedView style={styles.container}>
      {/* Title */}
      <ThemedText type="title">Budget Category</ThemedText>

      {/* Description */}
      <ThemedText type="default" style={styles.description}>
        This category represents a portion of your monthly income. You can
        customize it to better match your lifestyle.
      </ThemedText>

      {/* Example Data */}
      <ThemedView style={styles.card}>
        <ThemedText type="subtitle">Recommended</ThemedText>
        <ThemedText type="title">15%</ThemedText>
        <ThemedText type="default">≈ $750 / month</ThemedText>
      </ThemedView>

      {/* Actions */}
      <Pressable onPress={handleNavigateToEdit} style={styles.link}>
        <ThemedText type="link">Adjust this category</ThemedText>
      </Pressable>

      <Pressable onPress={handleNavigateToBudget} style={styles.link}>
        <ThemedText type="link">Back to budget</ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  description: {
    marginTop: 12,
    marginBottom: 24,
  },
  card: {
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 32,
  },
  link: {
    marginTop: 16,
    paddingVertical: 12,
  },
});
