import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import IntroScreen from './Components/IntroScreen';
;

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FacebookButton from "./FacebookButton";

export default function App() {
  return (
    <View style={styles.container}>
      <IntroScreen />  
      <StatusBar style="auto" />
      <FacebookButton />
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
});
