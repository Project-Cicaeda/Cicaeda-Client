import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";

const LandingPage = () => {
  const router = useRouter();

  const handleProceed = () => {
    router.push("/Questionnaire");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.projectTitle}>Project Cicaeda</Text>
        <View style={styles.profileIcon}></View>
      </View>

      {/* Banner Section */}
      <ImageBackground
        source={{ uri: "https://example.com/background.jpg" }}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.profileSection}>
          <Image
            source={require("../assets/images/image.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.welcomeText}>Hello User</Text>
        </View>
      </ImageBackground>

      {/* Description Box */}
      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>
          Your ultimate companion for a better Kidney Health
        </Text>
      </View>

      {/* Feature Section (Consultation and Pharmacy) - Now directly under description */}
      <View style={styles.featureSection}>
        <View style={[styles.featureCard, { backgroundColor: "#FFE8D6" }]}>
          <Text style={styles.featureTitle}>Consultation</Text>
          <Text style={styles.featureSubtitle}>56 doctors</Text>
        </View>
        <View style={[styles.featureCard, { backgroundColor: "#E4E8FF" }]}>
          <Text style={styles.featureTitle}>Pharmacy</Text>
          <Text style={styles.featureSubtitle}>6 pharmacies</Text>
        </View>
      </View>

      {/* Navigation Button */}
      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.navButton} onPress={handleProceed}>
          <Text style={styles.navText}>Proceed to Questionnaire</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
  },
  projectTitle: {
    fontSize: 22,
    fontFamily: "Poppins-Light",
    fontWeight: "500",
  },
  profileIcon: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    backgroundColor: "#E0E0E0",
  },
  backgroundImage: {
    width: "100%",
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  backgroundImageStyle: {
    borderRadius: 15,
    opacity: 0.9,
  },
  profileSection: {
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 10,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  descriptionBox: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 15,
    backgroundColor: "#E4F8FA",
    borderRadius: 15,
    alignItems: "center",
    elevation: 2,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
    color: "#333",
  },
  featureSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  featureCard: {
    width: "48%",
    padding: 20,
    borderRadius: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  featureSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  healthSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },
  healthCard: {
    width: "48%",
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 15,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  healthLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  healthValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  healthUnit: {
    fontSize: 14,
    color: "#666",
    fontWeight: "normal",
  },
  navButtons: {
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  navText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LandingPage;
