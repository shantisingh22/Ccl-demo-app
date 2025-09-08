import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import IntroScreen from "./Components/IntroScreen";
import Sessions from "./Components/Sessions";
import BringingBackPage from "./Components/BringingBackPage";
import WorkShop from "./Components/WorkShop";
import CertificationCourse from "./Components/CertificationCourse";
import SignInScreen from "./Components/SignIn";
import SignUpScreen from "./Components/SignUppage";
import CreativeLearning from "./Components/CreativeLearning";
import HomePage from "./Components/HomePage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="BringingBack" component={BringingBackPage} />
        <Stack.Screen name="Sessions" component={Sessions} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="CertificationCourse" component={CertificationCourse} />
        <Stack.Screen name="WorkShop" component={WorkShop} />
        <Stack.Screen name="CreativeLearning" component={CreativeLearning} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
