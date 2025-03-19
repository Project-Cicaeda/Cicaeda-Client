import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
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
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LandingPage = () => {
  const router = useRouter();
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [district, setDistrict] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);

      // Reverse Geocoding to get the district
      let address = await Location.reverseGeocodeAsync(currentLocation.coords);
      if (address.length > 0) {
        let foundDistrict =
          address[0].subregion ||
          address[0].region ||
          address[0].country ||
          "unknown";
        setDistrict(foundDistrict);

        // Save district to AsyncStorage
        await AsyncStorage.setItem("userDistrict", foundDistrict);
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

      <View style={styles.headerContainer}>
        <Text style={styles.projectTitle}>Project Cicaeda</Text>
        <View style={styles.profileIcon}></View>
      </View>

      <ImageBackground
        source={{ uri: "" }}
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
          {district ? (
            <Text style={styles.locationText}>District: {district}</Text>
          ) : (
            <Text style={styles.locationText}>
              {errorMsg ? errorMsg : "Fetching location..."}
            </Text>
          )}
        </View>
      </ImageBackground>

      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionText}>
          Your ultimate companion for better Kidney Health
        </Text>
      </View>


      {/* Feature Section */}
      {/* <View style={styles.featureSection}>
        <View style={[styles.featureCard, { backgroundColor: "#FFE8D6" }]}>
          <Text style={styles.featureTitle}>Consultation</Text>
          <Text style={styles.featureSubtitle}>56 doctors</Text>
        </View>
        <View style={[styles.featureCard, { backgroundColor: "#E4E8FF" }]}>
          <Text style={styles.featureTitle}>Pharmacy</Text>
          <Text style={styles.featureSubtitle}>6 pharmacies</Text>
        </View>
      </View> */}

      {/* Search Bar */}
      {/* <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for a doctor"
          placeholderTextColor="#888"
        />
      </View> */}

      {/* Usage Instructions Tile */}
      <View style={styles.usageInstructions}>
        <Text style={styles.usageTitle}>How to Use the Cicaeda:</Text>
        <Text style={styles.usagePoint}>
          • Register and login if your new or else login if your already
          registered.
        </Text>
        <Text style={styles.usagePoint}>
          • Click on the "Proceed to Questionnaire" button.
        </Text>
        <Text style={styles.usagePoint}>• Fill in the Questionnaire.</Text>
        <Text style={styles.usagePoint}>
          • Get your Kidney Health Prediction.
        </Text>
      </View>

      {/* Navigation Button */}

      <View style={styles.navButtons}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => router.push("/Questionnaire")}
        >
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
  locationText: {
    fontSize: 14,
    color: "#333",
    marginTop: 5,
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
  navButtons: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  navButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    borderRadius: 20,

    alignItems: "center",
  },
  navText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  usageInstructions: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 15,
    backgroundColor: "#D3D3D3", // Grey background
    borderRadius: 15,
  },
  usageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  usagePoint: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default LandingPage;
