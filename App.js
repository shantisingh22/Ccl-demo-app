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



// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
// import IntroScreen from './Components/IntroScreen';
// import BringingBackPage from './Components/BringingBackPage';
// import Sessions from './Components/Sessions';
// // import FacebookButton from "./FacebookButton";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <IntroScreen />  
//       <StatusBar style="auto" />
//       {/* <FacebookButton /> */}
//       <BringingBackPage />
//       <Sessions/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     // alignItems: "center",
//     justifyContent: "center",
//   },
// });




import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from './Components/IntroScreen';
import BringingBackPage from './Components/BringingBackPage';
import Sessions from './Components/Sessions';
import WorkShop from './Components/WorkShop';
import FacebookButton from "./FacebookButton";



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="BringingBack" component={BringingBackPage} />
        <Sessions name="Sessions" component={Sessions}/>
        <WorkShop name="WorkShop" component={WorkShop}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
