import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import ContinueButton from "./ContinueButton";

export default function BringingBackPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/Image_01.png")} style={styles.logo} />

      <Text style={styles.title}>
        <Text style={styles.bold}>'Bringing back the gleam in the eyes'</Text>
      </Text>

      <Text style={styles.subtitle}>
        We Create And Disseminate Inspiring {"\n"}
        And Engaging STEM Curriculum.
      </Text>

      <View style={styles.dotsContainer}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      <ContinueButton onPress={() => navigation.navigate("Sessions")} />

      <TouchableOpacity>
        <Text style={styles.skipText}>SKIP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // padding: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 90,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 10,
    color: "#004d40",
    width: 347,
    height: 80,
  },
  bold: {
    fontWeight: 800,
    fontSize: 32,
    color: "#004d40",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginBottom: 30,
  },
  dotsContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#00796B",
  },
  skipText: {
    color: "gray",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});
