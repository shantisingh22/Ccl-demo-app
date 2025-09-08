import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet, Image } from "react-native";
import { WebView } from "react-native-webview";

const cards = [
  { id: "1", title: "Discover", subtitle: "New places to explore", color: "#FF6B6B" },
  { id: "2", title: "Trending", subtitle: "What everyone likes", color: "#4ECDC4" },
  { id: "3", title: "Collections", subtitle: "Curated for you", color: "#FFD93D" },
];

const quickButtons = [
  { emoji: "📍", text: "Nearby", color: "#FF6B6B" },
  { emoji: "🔥", text: "Popular", color: "#4ECDC4" },
  { emoji: "💎", text: "Premium", color: "#FFD93D" },
];

function Card({ title, subtitle, color }) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.cardIcon}>🎨</Text>
      <View style={{ padding: 12 }}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

function QuickButton({ emoji, text, color }) {
  return (
    <TouchableOpacity style={[styles.quickBtn, { backgroundColor: color }]}>
      <Text style={{ fontSize: 20 }}>{emoji}</Text>
      <Text style={styles.quickBtnText}>{text}</Text>
    </TouchableOpacity>
  );
}

export default function IntroPage() {
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    alert("Logged out!");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CCL App</Text>
        <View style={styles.headerRight}>
          <View style={styles.iconBox}>
            <Text>🔔</Text>
          </View>
          <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Hero */}
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Hey there! 👋</Text>
          <Text style={{ marginVertical: 4 }}>Let's explore something colorful today</Text>

          <Text style={{ fontWeight: "600", fontSize: 14, marginBottom: 6 }}>
            Check out this IIT Gandhinagar video:
          </Text>

          <View style={{ height: 200, borderRadius: 14, overflow: "hidden", marginBottom: 4 }}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/fK9y8wiHUsk" }}
              style={{ flex: 1 }}
            />
          </View>
          <Text style={{ fontSize: 12, color: "#555", marginBottom: 12 }}>
            Video by IIT Gandhinagar
          </Text>

          {/* Search */}
          <View style={{ flexDirection: "row", marginBottom: 16 }}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search items, places or creators"
              value={search}
              onChangeText={setSearch}
            />
            <TouchableOpacity style={styles.searchBtn}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Go</Text>
            </TouchableOpacity>
          </View>

          {/* Quick buttons */}
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 16 }}>
            {quickButtons.map((btn) => (
              <QuickButton key={btn.text} {...btn} />
            ))}
          </View>
        </View>

        {/* Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 16 }}>
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </ScrollView>

        {/* Footer buttons */}
        <View style={styles.footer}>
          <TouchableOpacity style={[styles.footerBtn, { backgroundColor: "#FF6B6B" }]}>
            <Text style={styles.footerBtnText}>Start a project</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.footerBtn, { backgroundColor: "#4ECDC4" }]}>
            <Text style={styles.footerBtnText}>Create</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF8F0" },
  header: {
    height: 90,
    paddingHorizontal: 20,
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FF6B6B",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: { fontSize: 22, color: "white", fontWeight: "bold" },
  headerRight: { flexDirection: "row", alignItems: "center", gap: 10 },
  iconBox: {
    backgroundColor: "rgba(255,255,255,0.25)",
    padding: 8,
    borderRadius: 10,
    marginRight: 10,
  },
  logoutBtn: {
    backgroundColor: "rgba(255,255,255,0.25)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 14,
    borderRadius: 14,
    backgroundColor: "#fff",
    elevation: 2,
  },
  searchBtn: {
    marginLeft: 10,
    backgroundColor: "#FF6B6B",
    borderRadius: 12,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  quickBtn: {
    flex: 1,
    marginHorizontal: 4,
    padding: 12,
    borderRadius: 14,
    alignItems: "center",
  },
  quickBtnText: { marginTop: 6, fontWeight: "600", fontSize: 12, color: "white" },
  card: {
    width: 300,
    marginRight: 10,
    borderRadius: 20,
    overflow: "hidden",
  },
  cardIcon: {
    fontSize: 36,
    textAlign: "center",
    paddingVertical: 20,
    color: "white",
  },
  cardTitle: { fontSize: 18, fontWeight: "700", color: "white" },
  cardSubtitle: { marginTop: 6, color: "white" },
  footer: { flexDirection: "row", padding: 18, justifyContent: "space-between" },
  footerBtn: { flex: 1, marginHorizontal: 6, padding: 14, borderRadius: 14, alignItems: "center" },
  footerBtnText: { color: "white", fontWeight: "700" },
});




