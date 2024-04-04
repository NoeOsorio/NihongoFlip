import React, {  } from "react";
import {
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/Home";
import LessonsScreen from "./screens/Lessons";
import SettingsScreen from "./screens/Settings";
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen  name="Cards" component={HomeScreen} options={{

        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" size={size} color={color} />
        ),
      }} />
      <Tab.Screen name="Lecciones" component={LessonsScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="appstore1" size={size} color={color} />
        ),
      
      }}/>
      <Tab.Screen name="Ajustes" component={SettingsScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="setting" size={size} color={color} />
        ),
      
      }}/>
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
