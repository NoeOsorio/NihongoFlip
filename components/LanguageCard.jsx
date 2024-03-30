import React, { useRef, useEffect } from "react";
import {
  View,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";

const FlipCard = ({
  frontTitle = "",
  frontSubtitle = "",
  backTitle = "",
  isFront = true,
}) => {
  const animatedValue = useRef(new Animated.Value(isFront ? 0 : 180)).current;
  const valueRef = useRef(isFront ? 0 : 180);

  animatedValue.addListener(({ value }) => {
    valueRef.current = value;
  });

  useEffect(() => {
    if (isFront) {
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
  }, [isFront]);

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
          <Text style={styles.frontTitle}>{frontTitle}</Text>
          {frontSubtitle && <Text style={styles.frontSubtitle}>{frontSubtitle}</Text>}
        </Animated.View>
        <Animated.View
          style={[styles.flipCard, styles.flipCardBack, backAnimatedStyle]}
        >
          <Text style={styles.backTitle}>{backTitle}</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

// Estilos aquí

export default FlipCard;

const styles = StyleSheet.create({
  flipCard: {
    width: 350,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    backfaceVisibility: "hidden",
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
  frontTitle: {
    fontSize: 48,
    fontWeight: "bold",
    color: "red",
  },
  frontSubtitle: {
    paddingTop: 16,
    fontSize: 24,
  },
  backTitle: {
    fontSize: 48,
    fontWeight: "bold",
  },
});
