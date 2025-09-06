import React from "react";
import { View, Text, StyleSheet} from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Homepage 🎉</Text>
      
      <Text style={styles.subtitle}>
        You are successfully signed in!
      </Text>

      {/* <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate("HomePage")}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#004d40",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#00707E",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
