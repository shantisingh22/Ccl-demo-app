import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 

export function FacebookButton() {
  return (
    <TouchableOpacity style={styles.facebookButton}>
      <Ionicons name="logo-facebook" size={25} color="white" />
      <Text style={styles.facebookText}> Sign In With Facebook</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  facebookButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1877F2",
    padding: 12,
    borderRadius: 6,
    justifyContent: "center",
    marginBottom: 10,
    width: 320,
    height: 45,
  },
  facebookText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default FacebookButton;
