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
  TextInput,
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

      {/* Background Image with Logo */}
      <ImageBackground
        source={{ uri: "https://example.com/background.jpg" }}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/image.jpg")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.welcomeText}>Hello User</Text>
        </View>
      </ImageBackground>

      {/* Description Box */}
      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>
          Your ultimate companion for better Kidney Health
        </Text>
      </View>

      {/* Feature Section */}
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
    paddingTop: 50,
  },
  projectTitle: {
    fontSize: 22,
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
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",

    marginTop: 10,
  },
  descriptionBox: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 15,
    backgroundColor: "#E4F8FA",
    borderRadius: 15,
    alignItems: "center",
  },
  descriptionText: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "500",
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
  searchBarContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchBar: {
    fontSize: 16,
    color: "#333",
  },
  navButtons: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  navButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  navText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LandingPage;
