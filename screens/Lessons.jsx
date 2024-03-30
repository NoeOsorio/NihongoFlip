import { View, Text, Button, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { getLessons } from "../services/getLessons.service";
import LessonCard from "../components/LessonCard";

const Collections = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const lessonsData = await getLessons();
        setLessons(lessonsData);
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };

    fetchLessons();
  }, []);
  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <LessonCard lesson={item}/>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Collections</Text>
        <Button title="+" onPress={() => console.log("Add button pressed")} />
      </View>
      <FlatList
        data={lessons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default Collections;
