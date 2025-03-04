import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const handleProceed = () => {
  router.push("/Questionnaire");
};

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>
          Features Of Project Cicaeda And Management
        </Text>

        {/* Accurate Predictions Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Accurate Predictions</Text>
          <Text style={styles.cardText}>
            Our advanced algorithm analyzes your responses to the questionnaire.
          </Text>
        </View>

        {/* Multilingual Support Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Multilingual Support</Text>
          <Text style={styles.cardText}>
            Our app is available in multiple languages.
          </Text>
        </View>

        {/* Recommendations Section */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Recommendations</Text>
          <Text style={styles.cardText}>
            Receive suggestions to maintain good kidney health.
          </Text>
        </View>

        {/* Get Your Prediction Button */}
        <TouchableOpacity style={styles.button} onPress={handleProceed}>
          <Text style={styles.buttonText}>Get Your Prediction</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#222",
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    width: "90%",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: "#bbb",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#0f0",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LandingPage;
