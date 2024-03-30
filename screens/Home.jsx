import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import LanguageCard from "../components/LanguageCard";
import { getCards } from "../services/getCards.service";
import { getLessons } from "../services/getLessons.service";
import PickerModal from "../components/PickerModal";

const Home = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [languageCardsData, setLanguageCardsData] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(0);
  const [lessons, setLessons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLessons = async () => {
      setIsLoading(true);
      try {
        const lessonsData = await getLessons();
        setLessons(lessonsData);
        if (lessonsData.length) {
          setSelectedLesson(0);
        }
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };
    fetchLessons();
  }, []);

  useEffect(() => {
    const fetchCards = async () => {
      const cardsData = await getCards(lessons[selectedLesson]?.lesson);
      setLanguageCardsData(cardsData);
    };
    setIsLoading(true);
    fetchCards();
    setIsLoading(false);
  }, [lessons, selectedLesson]);

  const handleNext = () => {
    if (selectedCardIndex < languageCardsData.length - 1) {
      setSelectedCardIndex(selectedCardIndex + 1);
    }
  };

  const handleBack = () => {
    if (selectedCardIndex > 0) {
      setSelectedCardIndex(selectedCardIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <PickerModal
        text="Selecciona Leccion"
        options={lessons}
        onChange={setSelectedLesson}
      />
      <Text style={styles.title}>{lessons[selectedLesson]?.title}</Text>
      <View style={styles.container}>
        <LanguageCard
          frontTitle={languageCardsData[selectedCardIndex]?.frontTitle}
          frontSubtitle={languageCardsData[selectedCardIndex]?.frontSubtitle}
          backTitle={languageCardsData[selectedCardIndex]?.backTitle}
        />
        <View style={styles.buttonContainer}>
          {selectedCardIndex > 0 && (
            <Button title="Back" onPress={handleBack} />
          )}
          {selectedCardIndex < languageCardsData.length - 1 && (
            <Button title="Next" onPress={handleNext} />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
});

export default Home;
