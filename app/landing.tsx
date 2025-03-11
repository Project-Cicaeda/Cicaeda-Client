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


interface CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      {children}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};


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
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={{ uri: "https://example.com/background.jpg" }}
        style={styles.backgroundImage}
        imageStyle={styles.backgroundImageStyle}
      >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/image.jpg")}
            style={styles.logo}
            resizeMode="contain"
          />
        <View style={styles.headerContainer}>
          <Text style={styles.projectTitle}>Project Cicaeda</Text>
          <View style={styles.profileIcon}></View>
        </View>
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

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for a doctor"
          placeholderTextColor="#888"
        />
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

      {/* Health Section */}
      <View style={styles.healthSection}>
        <View style={styles.healthCard}>
          <Text style={styles.healthLabel}>Heart Rate</Text>
          <Text style={styles.healthValue}>
            78 <Text style={styles.healthUnit}>bpm</Text>
          </Text>
        </View>
        <View style={styles.healthCard}>
          <Text style={styles.healthLabel}>Sleep</Text>
          <Text style={styles.healthValue}>
            8 <Text style={styles.healthUnit}>hrs</Text>
          </Text>
        </View>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Chat</Text>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backgroundImage: {
    width: "100%",
    height: 180,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
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
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  searchBarContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    elevation: 2,
  },
  searchBar: {
    fontSize: 16,
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
    borderRadius: 15,
  card: {
    backgroundColor: "#E4F8FA",
    borderRadius: 15,
    padding: 15, // Reduced padding for smaller card size
    marginVertical: 10,
    width: "90%", // Reduced width for smaller card size
    alignItems: "center",
  },
  featureTitle: {
    fontSize: 18,
  title: {
    fontSize: 16, // Smaller font size for title
    fontWeight: "bold",
  },
  featureSubtitle: {
    fontSize: 14,
    color: "#666",
  description: {
    fontSize: 12, // Smaller font size for description
    color: "#464E56",
    textAlign: "center",
    marginTop: 5,
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
=======
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  iconContainer: {
    height: 40,
    width: 40,
    backgroundColor: "#333",
    borderRadius: 10,
    alignItems: "center",
    elevation: 2,
  },
  healthLabel: {
    fontSize: 14,
    color: "#666",
  icon: {
    fontSize: 20,
    color: "#4CAF50",
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
  healthValue: {
    fontSize: 22,
    fontWeight: "bold",
  },
  healthUnit: {
    fontSize: 14,
    color: "#666",
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
  navButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  navText: {
    color: "#fff",
    fontSize: 16,
  language: {
    color: "#384C3F",
    fontSize: 14, // Smaller font size for languages
  },
});

export default LandingPage;
