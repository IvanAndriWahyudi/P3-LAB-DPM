import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  // Lifecycle - componentDidMount (pertama kali komponen dimuat)
  useEffect(() => {
    console.log("HomeScreen component mounted");

    // return statement untuk componentWillUnmount
    return () => {
      console.log("HomeScreen component will unmount");
    };
  }, []); // Hanya dijalankan saat pertama kali komponen dimuat dan saat komponen di-unmount

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selamat datang di Halaman Utama</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
