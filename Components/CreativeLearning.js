import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
export default function CreativeLearning({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/toy-pyramid.png")} style={styles.logo} />

      <Text style={styles.title}>
        <Text style={styles.bold}>Unlock the Power of {"\n"} Creative Learning</Text>
      </Text>

      <Text style={styles.subtitle}>
        
      Experience the world of toy-based {"\n"} experiential learning, totally hands-on,{"\n"}  minds-in methodology.
      </Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    marginTop:30,
    color: "#004d40",
    width: 347,
    height: 80,
  },
  bold: {
    fontWeight: "800",
    fontSize: 32,
    color: "#004d40",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginBottom: 30,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginTop:40,
  },
  signInButton: {
    backgroundColor: "#065666", 
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width:160,
  },
  signInText: {
    color: "white",
    fontWeight: "600",
  },
  signUpButton: {
    borderColor: "#065666",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width:160,
  },
  signUpText: {
    color: "#065666",
    fontWeight: "600",
  },
});
