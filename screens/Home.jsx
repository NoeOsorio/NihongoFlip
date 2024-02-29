import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LanguageCard from "../components/LanguageCard";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home screen!</Text>
      <Text style={styles.subtitle}>This is a subtitle.</Text>
      <View style={styles.container}>
        <LanguageCard
          frontTitle="handsome"
          frontSubtitle="な"
          backTitle="かっこいい"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default Home;
