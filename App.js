// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
// import IntroScreen from './Components/IntroScreen';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <IntroScreen />  
//       <StatusBar style="auto", backgroundColor: "#fff", />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import IntroScreen from './Components/IntroScreen';
import BringingBackPage from './Components/BringingBackPage';
import Sessions from "./Components/Sessions";
// import FacebookButton from "./Components/FacebookButton";

export default function App() {
  return (
    <View style={styles.container}>
      <IntroScreen />  
      {/* <FacebookButton /> */}
      <BringingBackPage />
      <Sessions/>
      <StatusBar style="auto" />
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

