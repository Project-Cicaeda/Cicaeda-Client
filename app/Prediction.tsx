import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import BackArrow from "@/components/Common/backArrow";

const CKDPrediction: React.FC = () => {
  const score = 77.2; // Example score

  let riskLevel = "Low Risk";
  let bgColor = Colors.light.success;
  let message = "You're Safe";
  let summary = [
    {
      title: "Risk Factors Analysis",
      value:
        "No significant risks detected. Maintain a healthy diet and hydration.",
    },
    {
      title: "Hydration Level",
      value: "You drank 2L today, which is optimal for kidney health.",
    },
    {
      title: "Lifestyle & Diet Tips",
      value: "Continue exercising regularly and avoid excessive salt intake.",
    },
    {
      title: "Medication Reminder",
      value: "No medication reminders needed at this stage.",
    },
  ];

  if (score >= 70) {
    riskLevel = "High Risk";
    bgColor = Colors.light.danger;
    message = "Seek Medical Attention";
    summary = [
      {
        title: "Risk Factors Analysis",
        value:
          "High blood pressure and sugar levels detected. Consult a doctor immediately.",
      },
      {
        title: "Hydration Level",
        value:
          "Your hydration is low. Increase water intake to at least 2.5L daily.",
      },
      {
        title: "Lifestyle & Diet Tips",
        value:
          "Reduce sodium and processed foods immediately. Regular check-ups are necessary.",
      },
      {
        title: "Medication Reminder",
        value:
          "Strictly adhere to prescribed medications. Set daily reminders.",
      },
    ];
  } else if (score >= 30) {
    riskLevel = "Moderate Risk";
    bgColor = Colors.light.warning;
    message = "Monitor Your Health";
    summary = [
      {
        title: "Risk Factors Analysis",
        value:
          "Mild risks detected. Keep an eye on your blood pressure and sugar levels.",
      },
      {
        title: "Hydration Level",
        value:
          "You're drinking 1.5L daily. Increase to 2L for better kidney function.",
      },
      {
        title: "Lifestyle & Diet Tips",
        value:
          "Start incorporating kidney-friendly foods like fresh fruits and lean proteins.",
      },
      {
        title: "Medication Reminder",
        value:
          "If prescribed, follow up with your doctor about your medication routine.",
      },
    ];
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* CKD Score Section */}
        <View style={[styles.scoreContainer, { backgroundColor: bgColor }]}>
          <View style={styles.arrow}>
            <BackArrow />
          </View>
          <Text style={styles.scoreTitle}>CKD SCORE</Text>
          <Text style={styles.scoreValue}>{score}%</Text>
          <Text style={styles.scoreMessage}>{message}</Text>
        </View>

        {/* Summary Section */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Summary</Text>
          {summary.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <Text style={styles.listTitle}>{item.title}</Text>
              <Text style={styles.listValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        {/* Button */}
        <View style={styles.buttonContainer}>
          <Button title="Get Recommendations" color={Colors.light.primary} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CKDPrediction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Ensures space for scrolling
  },
  scoreContainer: {
    height: 250,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderBottomLeftRadius: 60,
    marginBottom: 20,
  },
  scoreTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  scoreValue: {
    fontSize: 42,
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
    backgroundColor: "#f5f5f5",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  listTitle: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  listValue: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
  },
  arrow: {
    alignSelf: "flex-start",
    top: -30,
  },
});
