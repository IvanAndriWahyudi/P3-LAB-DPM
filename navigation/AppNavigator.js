import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen"; // LoginScreen dengan input username dan PIN
import HomeScreen from "../screens/HomeScreen"; // HomeScreen sebagai halaman utama setelah login

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      {/* Menambahkan LoginScreen */}
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }} // Menghilangkan header
      />
      {/* Menambahkan HomeScreen */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Home" }} // Menampilkan judul "Home"
      />
    </Stack.Navigator>
  );
}
