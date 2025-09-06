import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({}); // error state

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  const validateNumber = (number) => /^[0-9]{10}$/.test(number);

  const handleSignIn = () => {
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

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Name:", name);
      console.log("Number:", number);
      console.log("Email:", email);
      console.log("Password:", password);
      alert("✅ Sign in successful!");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.navigate("CreativeLearning")}
      >
        <Ionicons name="arrow-back" size={24} color="#004d40" />
      </TouchableOpacity>

      <Text style={styles.title}>SIGN UP</Text>
      <Text style={styles.subtitle}>
        Sign In To Access The World Of Toy-Based Experiential Learning,
      </Text>

      {/* Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#888"
        value={name}
        onChangeText={setName}
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}

      {/* Phone Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#888"
        keyboardType="phone-pad"
        value={number}
        onChangeText={setNumber}
        maxLength={10}
      />
      {errors.number && <Text style={styles.error}>{errors.number}</Text>}

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="youremail@gmail.com"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {errors.password && <Text style={styles.error}>{errors.password}</Text>}

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Don’t have an Account?{" "}
        <Text style={styles.signupLink}>Sign Up here</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
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
    marginBottom: 5,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  forgot: {
    color: "#008080",
    textAlign: "right",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#008080",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 15,
  },
  signupLink: {
    color: "#008080",
    fontWeight: "bold",
  },
});
