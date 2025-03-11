import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
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
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={{ uri: "https://example.com/background.jpg" }}
        style={styles.backgroundImage}
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
          <View style={styles.profilePlaceholder}></View>
          <Text style={styles.welcomeText}>Hello User</Text>
          <TouchableOpacity style={styles.buttonSmall}></TouchableOpacity>
        </View>
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionText}>
            Your ultimate companion for a better Kidney Health
          </Text>
        </View>
      </ImageBackground>

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
    fontSize: 19,
    fontFamily: "Poppins-Light",
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
    marginTop: 20,
  },
  featureCard: {
    width: "48%",
    padding: 20,
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
    marginTop: 20,
  },
  healthCard: {
    width: "48%",
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 15,
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
  languageContainer: {
    alignItems: "center",
  },
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
