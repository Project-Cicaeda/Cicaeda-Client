import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import BackArrow from "@/components/Common/backArrow";
import { useTranslation } from "react-i18next";

import { router } from "expo-router";
import { fetchData } from "@/components/Common/StorageOperations";

const CKDPrediction: React.FC = () => {
  const [score, setScore] = useState(0);

  const { t, i18n } = useTranslation();

  let riskLevel = "Low Risk";
  let bgColor = Colors.light.success;
  let message = t("LowRisk.message");
  let summary = [
    {
      title: t("Prediction.title1"),
      value: t("LowRisk.risk"),
    },
    {
      title: t("Prediction.title2"),
      value: t("LowRisk.hydration"),
    },
    {
      title: t("Prediction.title3"),
      value: t("LowRisk.lifestyle"),
    },
    {
      title: t("Prediction.title4"),
      value: t("LowRisk.medication"),
    },
  ];

  if (score >= 70) {
    riskLevel = "High Risk";
    bgColor = Colors.light.danger;
    message = t("HighRisk.message");
    summary = [
      {
        title: t("Prediction.title1"),
        value: t("HighRisk.risk"),
      },
      {
        title: t("Prediction.title2"),
        value: t("HighRisk.hydration"),
      },
      {
        title: t("Prediction.title3"),
        value: t("HighRisk.lifestyle"),
      },
      {
        title: t("Prediction.title4"),
        value: t("HighRisk.medication"),
      },
    ];
  } else if (score >= 30) {
    riskLevel = "Moderate Risk";
    bgColor = Colors.light.warning;
    message = t("ModerateRisk.message");
    summary = [
      {
        title: t("Prediction.title1"),
        value: t("ModerateRisk.risk"),
      },
      {
        title: t("Prediction.title2"),
        value: t("ModerateRisk.hydration"),
      },
      {
        title: t("Prediction.title3"),
        value: t("ModerateRisk.lifestyle"),
      },
      {
        title: t("Prediction.title4"),
        value: t("ModerateRisk.medication"),
      },
    ];
  }

  useEffect(() => {
    async function getResultData() {
      const resultsData = await fetchData("results");
      if (resultsData) {
        setScore(Math.floor(resultsData.percentage));
        return;
      }
      return null;
    }
    getResultData();
  }, []);

  return (
    <View style={styles.container}>
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

          {/* Button */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => router.push("/time-series")}
          >
            <Text>More Statistics</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
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
    fontFamily: "Poppins-Bold",
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
    fontFamily: "Poppins-Regular",
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
    height: "100%",
  },
  summaryTitle: {
    fontFamily: "Poppins-Bold",
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
    marginTop: 40,
    borderRadius: 20,
  },
  arrow: {
    alignSelf: "flex-start",
    top: -30,
  },
});
