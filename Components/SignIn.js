import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FacebookButton from "./FacebookButton";

export default function SignInScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn}  onPress={() => navigation.navigate("CreativeLearning")}>
        <Ionicons name="arrow-back" size={24} color="#004d40" />
      </TouchableOpacity>

      <Text style={styles.title}>SIGN IN</Text>
      <Text style={styles.subtitle}>
        Sign In To Access The World Of Toy-<br></br>Based Experiential Learning,
      </Text>

      <Text style={styles.label}>Email Here</Text>
      <TextInput
        style={styles.input}
        placeholder="youremail@gmail.com"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="**************"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons
            name={passwordVisible ? "eye" : "eye-off"}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>SIGN IN</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or Sign In with</Text>
        <View style={styles.divider} />
      </View>

      <FacebookButton />

      <TouchableOpacity style={styles.googleButton}>
        <Ionicons name="logo-google" size={20} color="black" />
        <Text style={styles.googleText}> Sign In With Google</Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        Don’t have an Account?
        <Text style={styles.signUpLink}> Sign Up here</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
  backBtn: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#004d40",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    color: "gray",
    marginBottom: 30,
    fontSize: 16,
    fontWeight: 400,
  },
  label: {
    color: "#004d40",
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#00707E",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 320,
    height: 35,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 10,
    width: 320,
    height: 35,
    borderColor: "#00707E",
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    color: "gray",
    fontSize: 12,
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: "#00707E",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    marginBottom: 60,
    width: 320,
    height: 50,
  },
  signInText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#00707E",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#00707E",
    fontSize: 12,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
    width: 320,
    height: 50,
  },
  googleText: {
    color: "#6C6C6C",
    fontWeight: "600",
    fontSize: 16,
  },
  bottomText: {
    textAlign: "center",
    color: "gray",
    fontSize: 12,
  },
  signUpLink: {
    color: "#00796B",
    fontWeight: "bold",
  },
});
