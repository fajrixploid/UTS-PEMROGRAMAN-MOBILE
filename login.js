
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Platform,
} from "react-native";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    if (!email.trim() || !password.trim()) {
      const message = "Email dan password wajib diisi!";

      if (Platform.OS === "web") {
        window.alert(message);
      } else {
        Alert.alert("Login gagal", message);
      }
      return;
    }

    onLogin(email.trim());
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.card}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>K</Text>
        </View>

        <Text style={styles.brand}>KOPI XAU</Text>
        <Text style={styles.tagline}>COFFEE • GOLD • VALUE</Text>

        <View style={styles.heading}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>
            Your daily dose of coffee and focus.
          </Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan email"
            placeholderTextColor="#8B7965"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>Password</Text>

          <View style={styles.passwordBox}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Masukkan password"
              placeholderTextColor="#8B7965"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              onSubmitEditing={handleSubmit}
            />

            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowPassword(!showPassword)}
              accessibilityRole="button"
              accessibilityLabel={
                showPassword
                  ? "Sembunyikan password"
                  : "Tampilkan password"
              }
            >
              <Text style={styles.eyeText}>
                {showPassword ? "◉" : "◎"}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleSubmit}
            activeOpacity={0.8}
          >
            <Text style={styles.loginButtonText}>LOGIN →</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          COFFEE FIRST. TRADE WISELY.
        </Text>
        <Text style={styles.copyright}>© 2026 Jerrdfwl</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 420,
    backgroundColor: "#FFFCF7",
    borderRadius: 24,
    padding: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DCC9AC",
    ...Platform.select({
      web: {
        boxShadow: "0px 12px 30px rgba(65, 45, 25, 0.12)",
      },
      default: { elevation: 4 },
    }),
  },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 18,
    backgroundColor: "#C6A66B",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  logoText: {
    color: "#352319",
    fontSize: 36,
    fontWeight: "900",
  },
  brand: {
    color: "#49382D",
    fontSize: 25,
    fontWeight: "900",
    letterSpacing: 4,
  },
  tagline: {
    color: "#A18145",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
    marginTop: 7,
  },
  heading: {
    alignItems: "center",
    marginTop: 32,
    marginBottom: 28,
  },
  title: {
    color: "#352319",
    fontSize: 25,
    fontWeight: "800",
  },
  subtitle: {
    color: "#796854",
    fontSize: 12,
    marginTop: 8,
    textAlign: "center",
  },
  form: {
    width: "100%",
  },
  label: {
    color: "#49382D",
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "#D8C5A7",
    backgroundColor: "#F8F1E6",
    borderRadius: 11,
    paddingHorizontal: 14,
    color: "#352319",
    fontSize: 13,
    marginBottom: 20,
    outlineStyle: "none",
  },
  passwordBox: {
    width: "100%",
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D8C5A7",
    backgroundColor: "#F8F1E6",
    borderRadius: 11,
    marginBottom: 24,
  },
  passwordInput: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 14,
    color: "#352319",
    fontSize: 13,
    outlineStyle: "none",
  },
  eyeButton: {
    width: 46,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  eyeText: {
    color: "#8B6C36",
    fontSize: 23,
  },
  loginButton: {
    height: 49,
    borderRadius: 11,
    backgroundColor: "#C6A66B",
    alignItems: "center",
    justifyContent: "center",
  },
  loginButtonText: {
    color: "#352319",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 2,
  },
  footer: {
    color: "#806A53",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.3,
    marginTop: 30,
  },
  copyright: {
    color: "#A79883",
    fontSize: 10,
    marginTop: 12,
  },
});
