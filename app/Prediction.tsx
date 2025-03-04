import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";

interface CKDPredictionProps {
  score: number;
}

const CKDPrediction: React.FC<CKDPredictionProps> = ({ score }) => {
  const router = useRouter();

  let riskLevel = "Low Risk";
  let bgColor = Colors.light.success;
  let message = "You're Safe";

  if (score >= 70) {
    riskLevel = "High Risk";
    bgColor = Colors.light.danger;
    message = "Seek Medical Attention";
  } else if (score >= 30) {
    riskLevel = "Moderate Risk";
    bgColor = Colors.light.warning;
    message = "Monitor Your Health";
  }

  return (
    <View style={styles.container}>
      <View style={[styles.scoreContainer, { backgroundColor: bgColor }]}>
        <Text style={styles.scoreTitle}>CKD SCORE</Text>
        <Text style={styles.scoreValue}>{score}%</Text>
        <Text style={styles.scoreMessage}>{message}</Text>
      </View>
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Summary</Text>
        <View style={styles.metricsContainer}>
          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>Heart Rate</Text>
            <Text style={styles.metricValue}>97 bpm</Text>
          </View>
          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>Blood Pressure</Text>
            <Text style={styles.metricValue}>112 mmHG</Text>
          </View>
          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>Heart Rate</Text>
            <Text style={styles.metricValue}>97 bpm</Text>
          </View>
          <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>Heart Rate</Text>
            <Text style={styles.metricValue}>97 bpm</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Get Recommendations" color={Colors.light.primary} />
      </View>
    </View>
  );
};

export default CKDPrediction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: "100%",
  },
  scoreContainer: {
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  scoreTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  scoreValue: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
  },
  scoreMessage: {
    fontSize: 16,
    color: "#fff",
  },
  summaryContainer: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 10,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  metricsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  metricBox: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    width: "48%",
    marginBottom: 10,
  },
  metricLabel: {
    color: "#666",
  },
  metricValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 20,
  },
});
