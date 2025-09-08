import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import FacebookButton from "./FacebookButton";
import GoogleButton from "./GoogleButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignInScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignIn = async () => {
  let newErrors = {};
  if (!validateEmail(email.trim().toLowerCase())) {
    newErrors.email = "Enter a valid email address";
  }
  if (!password.trim()) {
    newErrors.password = "Password is required";
  }

  setErrors(newErrors);
  if (Object.keys(newErrors).length > 0) return;

  try {
    const storedData = await AsyncStorage.getItem("userData");
    console.log("📦 Stored userData:", storedData);

    if (!storedData) {
      setErrors({
        general: "❌ You don’t have an account. First, you need to sign up.",
      });
      return;
    }

    const parsedData = JSON.parse(storedData);

    const storedEmail = parsedData.email?.trim().toLowerCase();
    const storedPassword = parsedData.password?.trim();

    const inputEmail = email.trim().toLowerCase();
    const inputPassword = password.trim();

    console.log("👉 Input Email:", inputEmail);
    console.log("👉 Input Password:", inputPassword);
    console.log("👉 Stored Email:", storedEmail);
    console.log("👉 Stored Password:", storedPassword);

    // ✅ If email and password match stored data → Login success
    if (inputEmail === storedEmail && inputPassword === storedPassword) {
      Alert.alert("✅ Login Successful!");
      navigation.navigate("HomePage");
    } else {
      // 🔴 Wrong email OR password → unified error
      setErrors({
        general: "❌ You don’t have an account. First, you need to sign up.",
      });
    }
  } catch (error) {
    console.error("Error during sign-in:", error);
    setErrors({
      general: "❌ Something went wrong. Please try again.",
    });
  }
};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate("CreativeLearning")}
        >
          <Ionicons name="arrow-back" size={24} color="#004d40" />
        </TouchableOpacity>
        <Text style={styles.title}>SIGN IN</Text>
      </View>

      <Text style={styles.subtitle}>
        Sign In To Access The World Of Toy-Based Experiential Learning,
      </Text>

      <TextInput
        style={styles.input}
        placeholder="youremail@gmail.com"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="**************"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Ionicons
            name={passwordVisible ? "eye" : "eye-off"}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}
      {errors.general && <Text style={styles.error}>{errors.general}</Text>}

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>SIGN IN</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or Sign In with</Text>
        <View style={styles.divider} />
      </View>

      <FacebookButton />
      <GoogleButton />

      <Text style={styles.bottomText}>
        Don’t have an Account?
        <Text
          style={styles.signUpLink}
          onPress={() => navigation.navigate("SignUp")}
        >
          {" "}
          Sign Up here
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: 320,
  },
  backBtn: { marginRight: 10 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#004d40",
    textAlign: "center",
    flex: 1,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
    width: 320,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    width: 320,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    width: 320,
  },
  passwordInput: { flex: 1, paddingVertical: 10 },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
    width: 320,
    textAlign: "left",
  },
  forgotPassword: {
    color: "blue",
    textAlign: "right",
    marginBottom: 20,
    width: 320,
  },
  signInButton: {
    backgroundColor: "#008080",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
    width: 320,
  },
  signInText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: 320,
  },
  divider: { flex: 1, height: 1, backgroundColor: "#ccc" },
  dividerText: { marginHorizontal: 10, color: "#555" },
  bottomText: { textAlign: "center", width: 320 },
  signUpLink: { color: "blue", fontWeight: "bold" },
});
