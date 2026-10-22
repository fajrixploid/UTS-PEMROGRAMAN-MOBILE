
import React, { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import Login from "./login";
import Home from "./home";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogin = (email) => {
    const name = email.split("@")[0];
    setUserName(name || "Coffee Lover");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5EFE6" />

      {isLoggedIn ? (
        <Home userName={userName} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EFE6",
  },
});
