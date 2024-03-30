import React from "react";
import { View, Text, StyleSheet } from "react-native";

const LessonCard = ({ lesson }) => {
  const { cardNumber, lesson: lessonName, level, title, language } = lesson;
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>Cards: {cardNumber}</Text>
      <Text style={styles.description}>Nivel: {level}</Text>
      <Text style={styles.description}>Idioma: {language}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#888",
  },
});

export default LessonCard;
