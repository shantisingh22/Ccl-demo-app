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
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import GoogleButton from "./GoogleButton";

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) =>
  /^(?=.[A-Z])(?=.\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/.test(password);

  const validateNumber = (number) => /^[0-9]{10}$/.test(number);

  const handleSignUp = async () => {
  let newErrors = {};

  if (!name.trim()) {
    newErrors.name = "Please enter your full name";
  }
  if (!validateNumber(number)) {
    newErrors.number = "Enter a valid 10-digit mobile number";
  }
  if (!validateEmail(email)) {
    newErrors.email = "Enter a valid email address";
  }
  if (!validatePassword(password)) {
    newErrors.password =
      "Password must be 8+ chars, include 1 uppercase, 1 number & 1 special char";
  }
  if (password !== confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    try {
      const userData = { name, number, email, password };

      // ✅ print in console
      console.log("User Data Entered:", userData);

      // ✅ store in AsyncStorage
      await AsyncStorage.setItem("userData", JSON.stringify(userData));

      Alert.alert("✅ Sign up successful!");
      navigation.navigate("SignIn"); 
    } catch (error) {
      console.error("Error saving user data:", error);
    }
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
        <Text style={styles.title}>SIGN UP</Text>
      </View>
      <Text style={styles.subtitle}>
        Sign Up To Enter The World Of Toy-Based Experiential Learning,
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Email Here"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Ionicons
            name={passwordVisible ? "eye" : "eye-off"}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm Password"
          secureTextEntry={!confirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
        >
          <Ionicons
            name={confirmPasswordVisible ? "eye" : "eye-off"}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      </View>
      {errors.confirmPassword && (
        <Text style={styles.error}>{errors.confirmPassword}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>Or Sign Up with</Text>
        <View style={styles.divider} />
      </View>

      <FacebookButton />
      <GoogleButton/>

  
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
  backBtn: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#004d40",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#555",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    borderColor: "#ccc",
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#008080",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
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
    marginTop: 10,
  },
  googleText: {
    color: "#6C6C6C",
    fontWeight: "600",
    fontSize: 16,
  },
  footer: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 15,
    color: "#555",
  },
  signupLink: {
    color: "#008080",
    fontWeight: "bold",
  },

  header: {
    flexDirection: "row",       
    alignItems: "center",       
    marginBottom: 20,
  },
  backBtn: {
    marginRight: 10,            
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#004d40",
  },
});