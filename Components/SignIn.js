// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import FacebookButton from "./FacebookButton";
// import GoogleButton from "./GoogleButton";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// export default function SignInScreen({ navigation }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const handleSignIn = async () => {
//     try {
//       const storedData = await AsyncStorage.getItem("userData");

//       if (storedData) {
//         const { email: storedEmail, password: storedPassword } = JSON.parse(storedData);

//         if (email === storedEmail && password === storedPassword) {
//           Alert.alert("✅ Login Successful!");
//           navigation.navigate("HomePage");
//         } else {
//           Alert.alert("❌ Invalid email or password");
//         }
//       } else {
//         Alert.alert("⚠️ No user found. Please sign up first.");
//       }
//     } catch (error) {
//       console.error("Error during sign-in:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backBtn}
//           onPress={() => navigation.navigate("CreativeLearning")}
//         >
//           <Ionicons name="arrow-back" size={24} color="#004d40" />
//         </TouchableOpacity>
//         <Text style={styles.title}>SIGN IN</Text>
//       </View>

//       <Text style={styles.subtitle}>
//         Sign In To Access The World Of Toy-Based Experiential Learning,
//       </Text>

//       <Text style={styles.label}>Email Here</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="youremail@gmail.com"
//         keyboardType="email-address"
//         value={email}
//         onChangeText={setEmail}
//       />

//       <Text style={styles.label}>Password</Text>
//       <View style={styles.passwordContainer}>
//         <TextInput
//           style={styles.passwordInput}
//           placeholder="**************"
//           secureTextEntry={!passwordVisible}
//           value={password}
//           onChangeText={setPassword}
//         />
//         <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
//           <Ionicons
//             name={passwordVisible ? "eye" : "eye-off"}
//             size={20}
//             color="gray"
//           />
//         </TouchableOpacity>
//       </View>

//       <TouchableOpacity>
//         <Text style={styles.forgotPassword}>Forgot Password?</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.signInButton}
//         onPress={handleSignIn}
//       >
//         <Text style={styles.signInText}>SIGN IN</Text>
//       </TouchableOpacity>

//       <View style={styles.dividerContainer}>
//         <View style={styles.divider} />
//         <Text style={styles.dividerText}>Or Sign In with</Text>
//         <View style={styles.divider} />
//       </View>

//       <FacebookButton />
//       <GoogleButton />

//       <Text style={styles.bottomText}>
//         Don’t have an Account?
//         <Text
//           style={styles.signUpLink}
//           onPress={() => navigation.navigate("SignUp")}
//         >
//           {" "}Sign Up here
//         </Text>
//       </Text>
//     </View>
//   );
// }


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

  const handleSignIn = async () => {
    try {
      const storedData = await AsyncStorage.getItem("userData");

      if (storedData) {
        const { email: storedEmail, password: storedPassword } =
          JSON.parse(storedData);

        if (email === storedEmail && password === storedPassword) {
          Alert.alert("✅ Login Successful!");
          navigation.navigate("HomePage");
        } else {
          Alert.alert("❌ Invalid email or password");
        }
      } else {
        Alert.alert("⚠️ No user found. Please sign up first.");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
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

      <Text style={styles.label}>Email Here</Text>
      <TextInput
        style={styles.input}
        placeholder="youremail@gmail.com"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="**************"
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
          {" "}Sign Up here
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  header: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  backBtn: { marginRight: 10 },
  title: { fontSize: 24, fontWeight: "bold", color: "#004d40" },
  subtitle: { fontSize: 14, textAlign: "center", marginBottom: 20 },
  label: { marginTop: 10, fontWeight: "bold" },
  input: {
    borderWidth: 1, borderColor: "#ccc", borderRadius: 8,
    padding: 12, marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: "row", alignItems: "center",
    borderWidth: 1, borderColor: "#ccc",
    borderRadius: 8, paddingHorizontal: 12, marginBottom: 10,
  },
  passwordInput: { flex: 1, paddingVertical: 10 },
  forgotPassword: { color: "blue", textAlign: "right", marginBottom: 20 },
  signInButton: {
    backgroundColor: "#008080", padding: 15,
    borderRadius: 8, alignItems: "center", marginVertical: 20,
  },
  signInText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  dividerContainer: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  divider: { flex: 1, height: 1, backgroundColor: "#ccc" },
  dividerText: { marginHorizontal: 10, color: "#555" },
  bottomText: { textAlign: "center" },
  signUpLink: { color: "blue", fontWeight: "bold" },
});
