

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import  SignInScreen from './Components/SignUppage'
import IntroScreen from './Components/IntroScreen';
import BringingBackPage from './Components/BringingBackPage';
import Sessions from './Components/Sessions';
import FacebookButton from "./Components/FacebookButton";
import WorkShop from './Components/WorkShop';
;

export default function App() {
  return (
    <View style={styles.container}>
      < SignInScreen/>
      <IntroScreen />  
      <StatusBar style="auto" />
      <FacebookButton />
      <BringingBackPage />
      <Sessions/>
      <WorkShop/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});

