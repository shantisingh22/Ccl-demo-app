import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import IntroScreen from "./Components/IntroScreen";
import Sessions from "./Components/Sessions";
import BringingBackPage from "./Components/BringingBackPage";
const Stack = createStackNavigator();

export default function App() {
    return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="BringingBack" component={BringingBackPage} />
        <Stack.Screen name="Sessions" component={Sessions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



