import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function ContinueButton() {
  return (
    <TouchableOpacity style={styles.continueButton}>
      <Text style={styles.continueText}>CONTINUE</Text>
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
