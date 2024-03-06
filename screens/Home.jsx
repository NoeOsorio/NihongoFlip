import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import LanguageCard from "../components/LanguageCard";
import { firestore } from "../utils/firebaseConfig";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

const Home = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [languageCardsData, setLanguageCardsData] = useState([]);

  useEffect(() => {
    fetchLanguageCardsData();
  }, []);

  const fetchLanguageCardsData = async () => {
    try {
      const docRef = doc(firestore, "lessons", "L12");
      const docSnap = await getDoc(docRef);
      const collectionRef = collection(
        docRef,
        "vocabulario"
      );
      const querySnapshot = await getDocs(collectionRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        const vocabularyData = [];
        querySnapshot.forEach((doc) => {
          vocabularyData.push(doc.data());
        });
        console.log(vocabularyData)
        // const vocabularyData = docSnap.data().vocabulary;
        setLanguageCardsData(vocabularyData);
      } else {
        console.log("No such document exists!");
      }
    } catch (error) {
      console.error("Error fetching language cards data:", error);
    }
  };

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
      <Text style={styles.title}>Welcome to the Home screen!</Text>
      <Text style={styles.subtitle}>This is a subtitle.</Text>
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
