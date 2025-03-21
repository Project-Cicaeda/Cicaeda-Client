import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { removeUser } from "@/components/Common/StorageOperations";
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
      {/* Top Header Section */}
      <View style={styles.header}>
        <View style={styles.userShape}>
          <AntDesign name="user" size={16} color="white" />
          <Text style={styles.userText}> Hello, {userName}</Text>
        </View>
        <Image
          source={{ uri: "https://via.placeholder.com/40" }}
          style={styles.icon}
        />
      </View>

      {/* Kidney Health Data Tile */}
      <View style={styles.healthTile}>
        <Text style={styles.tileTitle}>Previous Predictions</Text>
      </View>

      {/* Buttons Container */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            await removeUser(); // Call removeUser function
            router.push("/login"); // Navigate to login page
          }}
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
    paddingTop: 50, // Added this to push content down
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  userShape: {
    flexDirection: "row",
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  userText: {
    color: "white",
    fontSize: 14,
    marginLeft: 5,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  healthTile: {
    backgroundColor: "#d3f2d3",
    paddingVertical: 80,
    borderRadius: 20,
    alignItems: "flex-end", // Changed from "right" to "flex-end"
    justifyContent: "flex-start",
    marginBottom: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  tileTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
    textAlign: "center",
    marginTop: 10,
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
