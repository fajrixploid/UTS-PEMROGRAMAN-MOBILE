
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";

export default function Home({ userName, onLogout }) {
  const menus = [
    {
      id: 1,
      icon: "☕",
      title: "Coffee Menu",
      description: "Explore your favorite coffee",
    },
    {
      id: 2,
      icon: "◈",
      title: "Trading Insights",
      description: "Discover the world of trading",
    },
    {
      id: 3,
      icon: "▤",
      title: "Market Education",
      description: "Learn about gold and forex",
    },
    {
      id: 4,
      icon: "☆",
      title: "My Favorites",
      description: "Your favorite coffee picks",
    },
  ];

  const handleMenu = (title) => {
    const message = `${title}\n\nFitur ini akan segera hadir!`;

    if (Platform.OS === "web") {
      window.alert(message);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>K</Text>
          </View>

          <View>
            <Text style={styles.brand}>KOPI XAU</Text>
            <Text style={styles.tagline}>
              COFFEE • GOLD • VALUE
            </Text>
          </View>
        </View>

        <Text style={styles.pageTitle}>HOME PAGE</Text>

        <View style={styles.profileCard}>
          <View style={styles.photoFrame}>
            <Image
              source={require("./assets/profile.jpeg")}
              style={styles.profileImage}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.profileLabel}>
            GOOD DAY,
          </Text>

          <Text style={styles.profileName}>
            COFFEE LOVER!
          </Text>

          <View style={styles.nameDivider} />

          <Text style={styles.userName}>
            {userName || "Coffee Lover"}
          </Text>

          <Text style={styles.profileDescription}>
            Brew your moment. Enjoy your journey.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>
          Explore Kopi XAU
        </Text>

        <View style={styles.menuGrid}>
          {menus.map((menu) => (
            <TouchableOpacity
              key={menu.id}
              style={styles.menuCard}
              activeOpacity={0.75}
              onPress={() => handleMenu(menu.title)}
            >
              <View style={styles.menuIcon}>
                <Text style={styles.menuIconText}>
                  {menu.icon}
                </Text>
              </View>

              <Text style={styles.menuTitle}>
                {menu.title}
              </Text>

              <Text style={styles.menuDescription}>
                {menu.description}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.quoteCard}>
          <Text style={styles.quoteText}>
            "Coffee, Gold, and a Better Perspective."
          </Text>
        </View>

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={onLogout}
          activeOpacity={0.8}
        >
          <Text style={styles.logoutText}>
            ↩  TOMBOL LOGOUT
          </Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          © 2026 KOPI XAU
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    padding: 22,
    backgroundColor: "#F3EBDD",
  },

  container: {
    width: "100%",
    maxWidth: 440,
    backgroundColor: "#FFFCF7",
    borderWidth: 1,
    borderColor: "#DCC9AC",
    borderRadius: 22,
    padding: 22,
    ...Platform.select({
      web: {
        boxShadow: "0px 10px 28px rgba(65, 45, 25, 0.10)",
      },
      default: {
        elevation: 4,
      },
    }),
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 26,
  },

  logo: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: "#C6A66B",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 11,
  },

  logoText: {
    fontSize: 24,
    fontWeight: "900",
    color: "#352319",
  },

  brand: {
    fontSize: 15,
    fontWeight: "900",
    letterSpacing: 2,
    color: "#49382D",
  },

  tagline: {
    fontSize: 8,
    letterSpacing: 1,
    color: "#9A7945",
    marginTop: 4,
  },

  pageTitle: {
    fontSize: 23,
    fontWeight: "900",
    textAlign: "center",
    color: "#49382D",
    marginBottom: 22,
  },

  profileCard: {
    backgroundColor: "#E9D8BC",
    borderWidth: 1,
    borderColor: "#C6A66B",
    borderRadius: 18,
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 28,
  },

  photoFrame: {
    width: 112,
    height: 112,
    borderRadius: 22,
    borderWidth: 3,
    borderColor: "#C6A66B",
    backgroundColor: "#F7EBDD",
    overflow: "hidden",
    marginBottom: 16,
  },

  profileImage: {
    width: "100%",
    height: "100%",
  },

  profileLabel: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 2,
    color: "#80603A",
  },

  profileName: {
    fontSize: 23,
    fontWeight: "900",
    color: "#49382D",
    textAlign: "center",
    marginTop: 5,
  },

  nameDivider: {
    width: 55,
    height: 3,
    borderRadius: 3,
    backgroundColor: "#C6A66B",
    marginVertical: 14,
  },

  userName: {
    fontSize: 16,
    fontWeight: "800",
    color: "#60452F",
    textAlign: "center",
  },

  profileDescription: {
    fontSize: 11,
    color: "#806A53",
    textAlign: "center",
    marginTop: 8,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: "900",
    color: "#49382D",
    marginBottom: 16,
  },

  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 12,
  },

  menuCard: {
    width: "48%",
    minHeight: 145,
    padding: 13,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E1D1B8",
    borderRadius: 15,
    justifyContent: "center",
  },

  menuIcon: {
    width: 39,
    height: 39,
    borderRadius: 12,
    backgroundColor: "#F0E3CD",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 11,
  },

  menuIconText: {
    fontSize: 23,
    color: "#98763E",
  },

  menuTitle: {
    fontSize: 12,
    fontWeight: "900",
    color: "#49382D",
  },

  menuDescription: {
    fontSize: 10,
    lineHeight: 15,
    color: "#8B7965",
    marginTop: 6,
  },

  quoteCard: {
    backgroundColor: "#F3EBDD",
    borderRadius: 12,
    padding: 14,
    marginTop: 22,
  },

  quoteText: {
    fontSize: 11,
    color: "#80603A",
    textAlign: "center",
    fontStyle: "italic",
  },

  logoutButton: {
    height: 46,
    backgroundColor: "#C6A66B",
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 26,
  },

  logoutText: {
    color: "#352319",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1,
  },

  footer: {
    color: "#9A8975",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
    letterSpacing: 1.5,
  },
});
