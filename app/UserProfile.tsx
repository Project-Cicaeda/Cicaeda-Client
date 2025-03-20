import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";

const ProfileScreen = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        const parsedData = JSON.parse(userData);
        setUserName(parsedData.name || "User");
      }
    };
    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header Section with Tiles */}
      <View style={styles.header}>
        <View style={styles.userTile}>
          <AntDesign name="user" size={16} color="white" />
          <Text style={styles.userText}> Hello, {userName}</Text>
        </View>
        <View style={styles.logoTile}>
          <Image
            source={require("../assets/images/image.jpg")}
            style={styles.logoImage}
          />
        </View>
      </View>

      {/* Kidney Health Data Tile */}
      <View style={styles.healthTile}>
        <Text style={styles.tileTitle}>Previous Predictions</Text>
        <View style={styles.tileContent}>
          {/* Add any content for the health tile here */}
        </View>
      </View>

      {/* Buttons Container */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/ResetPassword")}
        >
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.buttonText}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  userTile: {
    flexDirection: "row",
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  logoTile: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  userText: {
    color: "white",
    fontSize: 14,
    marginLeft: 5,
  },
  logoImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  healthTile: {
    backgroundColor: "#d3f2d3",
    borderRadius: 20,
    marginBottom: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    paddingBottom: 20,
    overflow: "hidden",
  },
  tileTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
    textAlign: "center",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    paddingVertical: 15,
    marginBottom: 20,
  },
  tileContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    height: 100, // Adjust this as needed
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 10,
    width: 150,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
