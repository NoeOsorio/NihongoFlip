import React, { useRef } from "react";
import {
  View,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
const FlipCard = ({ frontTitle = "", frontSubtitle = "", backTitle = "" }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const valueRef = useRef(0); // Usamos useRef para mantener el estado de la rotación

  animatedValue.addListener(({ value }) => {
    valueRef.current = value; // Actualizamos el valor de la referencia aquí
  });

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  const flipCard = () => {
    if (valueRef.current >= 90) {
      Animated.spring(animatedValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(animatedValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={flipCard}>
        <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
          <Text>{frontTitle}</Text>
          {frontSubtitle && <Text>{frontSubtitle}</Text>}
        </Animated.View>
        <Animated.View
          style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}
        >
          <Text>{backTitle}</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

// Estilos aquí

export default FlipCard;

const styles = StyleSheet.create({
  flipCard: {
    width: 200,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    backfaceVisibility: "hidden",
    // Establece bordes y sombras para una mejor apariencia
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flipCardBack: {
    position: "absolute",
    top: 0,
  },
});
