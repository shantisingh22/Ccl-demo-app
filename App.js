import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
// import IntroScreen from './Components/IntroScreen';
import BringingBackPage from "./Components/BringingBackPage";
// import FacebookButton from "./FacebookButton";
import CertificationCourse from "./Components/CertificationCourse";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <IntroScreen />   */}
      <StatusBar style="auto" />
      {/* <FacebookButton /> */}
      {/* <BringingBackPage /> */}
      <CertificationCourse />
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
