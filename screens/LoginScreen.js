import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [username, setUsername] = useState(""); // State untuk username
  const [pin, setPin] = useState(""); // State untuk PIN
  const navigation = useNavigation();

  // Fungsi untuk menangani klik tombol "Masuk"
  const handleLogin = () => {
    if (username === "" || pin === "") {
      Alert.alert("Error", "Username dan PIN tidak boleh kosong!");
    } else {
      navigation.navigate("Home");
    }
  };

  // Lifecycle - componentDidMount (pertama kali komponen dimuat)
  useEffect(() => {
    console.log("LoginScreen component mounted");

    // return statement untuk componentWillUnmount
    return () => {
      console.log("LoginScreen component will unmount");
    };
  }, []); // Dependency array kosong berarti ini hanya dijalankan saat komponen dimuat pertama kali dan saat komponen di-unmount

  // Lifecycle - componentDidUpdate
  useEffect(() => {
    if (username !== "" || pin !== "") {
      console.log("Username atau PIN diperbarui");
    }
  }, [username, pin]); // Digunakan untuk memantau perubahan pada username dan pin

  return (
    <View style={styles.container}>
      <Image source={require("../assets/bca-logo.png")} style={styles.logo} />
      <Text style={styles.welcomeText}>Selamat Datang di MyBCA</Text>

      {/* Input Username */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      {/* Input PIN */}
      <TextInput
        style={styles.input}
        placeholder="PIN"
        secureTextEntry
        value={pin}
        onChangeText={setPin}
      />

      {/* Tombol Masuk */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Masuk</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A74BA",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: "#1A74BA",
    fontWeight: "bold",
    fontSize: 16,
  },
});
