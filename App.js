import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import IntroScreen from './Components/IntroScreen';
import FacebookButton from './Components/FacebookButton';
import BringingBackPage from './Components/BringingBackPage'
;


export default function App() {
  return (
    <View style={styles.container}>
      <IntroScreen />  
      <StatusBar style="auto" />
      <FacebookButton />
      <BringingBackPage />
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
