import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import { removeUser } from "@/components/Common/StorageOperations";
import axios from "axios";
import { ipAddress } from "@/components/Common/ipAddress";
import { fetchData } from "@/components/Common/StorageOperations";
import moment from "moment";

const ProfileScreen = () => {
  const router = useRouter();
  const [userName, setUserName] = useState("User");
  const [predictions, setPredictions] = useState<any[]>([]);

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

  async function getResults(accessToken: String) {

    const response = await axios.get(`${ipAddress}/questionnaire/history`, {
      headers: { Authorization: `bearer ${accessToken}` },
    });
    setPredictions(response.data);
  }

  useEffect(() => {
    async function endpoint() {
      const token = await fetchData("user");
      getResults(token.accessToken);
    }
    endpoint();
    
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.userShape}>
          <AntDesign name="user" size={16} color="white" />
          <Text style={styles.userText}> Hello, {userName}</Text>
        </View>
        <Image
          source={{ uri: "https://via.placeholder.com/40" }}
          style={styles.profileIcon}
        />
      </View>

      <View style={styles.descriptionBox}>
        <Text style={styles.descriptionTitle}>Previous Predictions</Text>
        {predictions.length > 0 ? (
          predictions.map((prediction, index) => {
            const formattedDate = moment(prediction.createdAt).format(
              "YYYY-MM-DD HH:mm"
            );
            console.log(prediction)
            const number = (prediction.total / 11) * 100;
            if(number){
              return (
                <Text key={index} style={styles.predictionText}>
  
                  {formattedDate}: {Math.floor(number)}%
                </Text>
              );
            }
          })
        ) : (
          <Text style={styles.noDataText}>No predictions available</Text>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/ForgotPassword")}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.logoutButton]}
          onPress={async () => {
            await removeUser();
            router.push("/login");
          }}
        >
          <Text style={styles.buttonText}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 10,
  },
  userShape: {
    flexDirection: "row",
    backgroundColor: "#4CAF50",
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
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E0E0E0",
  },
  descriptionBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  predictionText: {
    fontSize: 14,
    color: "#333",
    marginVertical: 5,
  },
  noDataText: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    width: "45%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "#dc3545",
  },
});
