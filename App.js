import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import IntroScreen from './Components/IntroScreen';
import WorkShop from './Components/WorkShop'
;


export default function App() {
  return (
    <View style={styles.container}>
      <IntroScreen /> 
      {/* <WorkShop/>  */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
