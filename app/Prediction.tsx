import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import BackArrow from "@/components/Common/backArrow";

const CKDPrediction: React.FC = () => {
  const score = 20; // Example score

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
    <SafeAreaView style={styles.container}>
      {/* CKD Score Section */}
      <View style={[styles.scoreContainer, { backgroundColor: bgColor }]}>
        <View style={styles.arrow}>
          {/* Back Arrow */}
          <BackArrow />
        </View>

        <Text style={styles.scoreTitle}>CKD SCORE</Text>
        <Text style={styles.scoreValue}>{score}%</Text>
        <Text style={styles.scoreMessage}>{message}</Text>
      </View>

      {/* Summary Section */}
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

      {/* Button */}
      <View style={styles.buttonContainer}>
        <Button title="Get Recommendations" color={Colors.light.primary} />
      </View>
    </SafeAreaView>
  );
};

export default CKDPrediction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scoreContainer: {
    height: "40%", // Adjust for proportion
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderBottomLeftRadius: 60, // Smooth curve at bottom
    marginBottom: 50,
  },
  scoreTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  scoreValue: {
    fontSize: 42, // Slightly larger
    fontWeight: "bold",
    color: "#fff",
  },
  scoreMessage: {
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
  },
  summaryContainer: {
    height: "100%",
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 15,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  metricsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  metricBox: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    width: "47%", // Adjust for spacing
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  metricLabel: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
    marginBottom: 5,
  },
  metricValue: {
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  arrow: {
    alignSelf: "flex-start",
    marginTop: 0,
    top: -50,
  },
});
