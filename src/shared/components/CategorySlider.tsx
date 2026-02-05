import Slider from "@react-native-community/slider";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export function CategorySlider({ label, value, onChange }: Props) {
  console.log("Slider props:", { label, value, onChange });

  return (
    <View style={styles.container}>
      <Text>
        {label}: {value}%
      </Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={value}
        onValueChange={onChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 12 },
});
