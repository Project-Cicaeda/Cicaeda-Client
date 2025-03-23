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
  ScrollView,
  Dimensions,
} from "react-native";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";

const { width } = Dimensions.get("window");

const LandingPage = () => {
  const router = useRouter();
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [district, setDistrict] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { t, i18n } = useTranslation();

  //Effect to request location permission and get user's district
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});

      //Get current Location
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

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <Text style={styles.projectTitle}>{t("Home.heading")}</Text>

          {/* Profile Image with Navigation */}
          <TouchableOpacity onPress={() => router.push("/UserProfile")}>
            <Image
              source={require("../assets/images/profileicon.png")}
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Hero Section with Background */}
        <View style={styles.heroSection}>
          <Image
            source={require("../assets/images/image.jpg")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.welcomeText}>{t("Home.welcomeText")}</Text>
          {district ? (
            <View style={styles.locationContainer}>
              <FontAwesome name="map-marker" size={16} color="#555" />
              <Text style={styles.locationText}>
                {t("Home.district")} {district}
              </Text>
            </View>
          ) : (
            <Text style={styles.locationText}>
              {errorMsg ? errorMsg : "Fetching location..."}
            </Text>
          )}
        </View>

        {/* Description Box with enhanced styling */}
        {/* <View style={styles.descriptionBox}>
          <Text style={styles.descriptionTitle}>
            {t("Home.aboutServiceTitle")}
          </Text>
          <Text style={styles.descriptionText}>{t("Home.description")}</Text>
        </View> */}

        {/* Feature Cards */}
        <View style={styles.featureSection}>
          {/* <Text style={styles.sectionTitle}>
            {t("Home.featuresSectionTitle")}
          </Text> */}
          <View style={styles.cardsContainer}>
            <View style={styles.featureCard}>
              <View style={[styles.iconCircle, { backgroundColor: "#4CAF50" }]}>
                <FontAwesome name="line-chart" size={20} color="#fff" />
              </View>
              <Text style={styles.featureTitle}>
                {t("Home.mlAnalysisTitle")}
              </Text>
              <Text style={styles.featureDescription}>
                {t("Home.mlAnalysisDescription")}
              </Text>
            </View>

            <View style={styles.featureCard}>
              <View style={[styles.iconCircle, { backgroundColor: "#FF9800" }]}>
                <FontAwesome name="heartbeat" size={20} color="#fff" />
              </View>
              <Text style={styles.featureTitle}>
                {t("Home.ckdPredictionTitle")}
              </Text>
              <Text style={styles.featureDescription}>
                {t("Home.ckdPredictionDescription")}
              </Text>
            </View>
          </View>
        </View>

        {/* Usage Instructions with improved design */}
        <View style={styles.usageInstructions}>
          <Text style={styles.usageTitle}>{t("Home.usageTitle")}</Text>

          <View style={styles.usagePointContainer}>
            <View
              style={[styles.usageIconCircle, { backgroundColor: "#4CAF50" }]}
            >
              <FontAwesome name="user-plus" size={16} color="#fff" />
            </View>
            <View style={styles.usageTextContainer}>
              <Text style={styles.usagePointTitle}>
                {t("Home.usageCreateProfileTitle")}
              </Text>
              <Text style={styles.usagePoint}>{t("Home.point1")}</Text>
            </View>
          </View>

          <View style={styles.usagePointContainer}>
            <View
              style={[styles.usageIconCircle, { backgroundColor: "#FF9800" }]}
            >
              <FontAwesome name="file-text" size={16} color="#fff" />
            </View>
            <View style={styles.usageTextContainer}>
              <Text style={styles.usagePointTitle}>
                {t("Home.usageFillQuestionnaireTitle")}
              </Text>
              <Text style={styles.usagePoint}>{t("Home.point2")}</Text>
            </View>
          </View>

          <View style={styles.usagePointContainer}>
            <View
              style={[styles.usageIconCircle, { backgroundColor: "#E91E63" }]}
            >
              <FontAwesome name="heartbeat" size={16} color="#fff" />
            </View>
            <View style={styles.usageTextContainer}>
              <Text style={styles.usagePointTitle}>
                {t("Home.usageGetPredictionTitle")}
              </Text>
              <Text style={styles.usagePoint}>{t("Home.point4")}</Text>
            </View>
          </View>
        </View>

        {/* Call to Action Section */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>{t("Home.ctaTitle")}</Text>
          <Text style={styles.ctaDescription}>{t("Home.ctaDescription")}</Text>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => router.push("/Questionnaire")}
          >
            <Text style={styles.navText}>{t("Home.button")}</Text>
            <FontAwesome
              name="arrow-right"
              size={16}
              color="#fff"
              style={{ marginLeft: 8 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    paddingBottom: 10,
  },
  projectTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
    borderWidth: 2,
    borderColor: "#4CAF50",
  },
  heroSection: {
    width: "100%",
    height: 200,
    left: -20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#F2F7FD",
    borderRadius: 15,
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "white",
    alignSelf: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 15,
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 16,
  },
  locationText: {
    fontSize: 14,
    color: "#555",
    marginLeft: 5,
  },
  descriptionBox: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    marginHorizontal: 20,
  },
  featureSection: {
    marginTop: 20,
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  featureCard: {
    width: (width - 50) / 2,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: "center",
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
    textAlign: "center",
  },
  featureDescription: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
  },
  usageInstructions: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  usageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
  },
  usagePointContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  usageIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    marginTop: 2,
  },
  usageTextContainer: {
    flex: 1,
  },
  usagePointTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 5,
  },
  usagePoint: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  statsSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
    padding: 15,
    backgroundColor: "#4CAF50",
    borderRadius: 15,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  statLabel: {
    fontSize: 12,
    color: "#fff",
    marginTop: 5,
  },
  statDivider: {
    height: 30,
    width: 1,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  ctaSection: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: "center",
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  ctaDescription: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 25,
    width: "100%",
  },
  navText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LandingPage;
