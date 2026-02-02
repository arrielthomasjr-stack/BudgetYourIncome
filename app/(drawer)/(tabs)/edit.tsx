import { View, Text, StyleSheet } from "react-native";

export default function EditScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit</Text>
      <Text style={styles.subtitle}>Edit your budget entries</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F4F6",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
  },
  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 8,
  },
});
