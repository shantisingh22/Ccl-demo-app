/// import * as React from "react";
import { View } from "react-native";

// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
// import IntroScreen from "./Components/IntroScreen";
// import Sessions from "./Components/Sessions";
// import BringingBackPage from "./Components/BringingBackPage";
// import WorkShop from "./Components/WorkShop";
// import CertificationCourse from "./Components/CertificationCourse";
// import FacebookButton from "./Components/FacebookButton";
// import SignInScreen from "./Components/SignIn";
import SignUpScreen from "./Components/SignUppage";

// const Stack = createStackNavigator();

export default function App() {
  return (
    <View>
      {/* <NavigationContainer> */}
      <StatusBar style="auto" />
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}> */}
      {/* <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="BringingBack" component={BringingBackPage} />
        <Stack.Screen name="Sessions" component={Sessions} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Facebook" component={FacebookButton} />
        <Stack.Screen name="Certification" component={CertificationCourse} />
        <Stack.Screen name="WorkShop" component={WorkShop} />
        <Stack.Screen
          name="CertificationCourse"
          component={CertificationCourse}
        /> */}
      {/* <Stack.Screen name="WorkShop" component={WorkShop} /> */}
      <SignUpScreen />
      {/* <SignInScreen /> */}
    </View>
    // {/* </Stack.Navigator> */}
    // </NavigationContainer>
  );
}
