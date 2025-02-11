import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.filled, { width: `${progress * 100}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 6,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    marginVertical: 20,
  },
  filled: {
    height: "100%",
    backgroundColor: Colors.light.primary,
    borderRadius: 5,
  },
});
