import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ContinueButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.continueButton} onPress={onPress}>
      <Text style={styles.continueText}>Continue</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  continueButton: {
    backgroundColor: "#00796B",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 6,
    marginBottom: 15,
  },
  continueText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
