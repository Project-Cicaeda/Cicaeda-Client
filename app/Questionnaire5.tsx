import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { RadioButton } from "react-native-paper"; // Import RadioButton
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import BackArrow from "@/components/Common/backArrow";
import { ProgressBar } from "@/components/Forms/ProgressBar";
import { useTranslation } from "react-i18next";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ELEVATION_LEVELS_MAP } from "react-native-paper/lib/typescript/components/Menu/Menu";

const API_URL = "https://10.0.2.2:3000";

export const submitQuestionnaire = async (
  formData: Record<string, any>,
  token: string
) => {
  try {
    const response = await axios.post(
      `${API_URL}/questionnaire/submit`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    await AsyncStorage.setItem("results", response.data);

    return response.data;
  } catch (error) {
    console.error("Error submitting questionnaire:", error);
    return null;
  }
};

const MedicalForm = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const params = useLocalSearchParams();
  const previousData =
    typeof params.data === "string" ? JSON.parse(params.data) : {};

  const [formData, setFormData] = useState({
    ...previousData,
    question17: "",
    question18: "",
    question19: "",
    question20: "", // Ensure the question20 field is initialized
  });

  // Function to handle questionnaire inputs
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleProceed = async () => {
    console.log("Form Data:", JSON.stringify(formData));

    const token = await AsyncStorage.getItem("token");

    if (!token) {
      alert("You need to log in first!");
      return;
    }

    const response = await submitQuestionnaire(formData, token);
    if (response) {
      router.push("/Prediction");
    } else {
      alert("Error submitting questionnaire. Please try again later.");
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Back Button */}
          <BackArrow />

          {/* Heading */}
          <Text style={styles.heading}>{t("Questionnaire5.heading")}</Text>
          <Text style={styles.subheading}>
            {t("Questionnaire5.subHeading")}
          </Text>

          {/* Progress Bar */}
          <ProgressBar progress={1} />

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            {/* Question 1 */}
            <View style={styles.radioContainer}>
              <Text style={styles.radioLabel}>
                {t("Questionnaire5.question1")}
              </Text>
              <RadioButton.Group
                onValueChange={(value) => {
                  handleInputChange("question17", value);
                }}
                value={formData.question17}
              >
                <View style={styles.radioRow}>
                  <RadioButton value="Yes" />
                  <Text>Yes</Text>
                  <RadioButton value="No" />
                  <Text>No</Text>
                </View>
              </RadioButton.Group>
            </View>

            {/* Question 2 */}
            <View style={styles.radioContainer}>
              <Text style={styles.radioLabel}>
                {t("Questionnaire5.question2")}
              </Text>
              <RadioButton.Group
                onValueChange={(value) => {
                  handleInputChange("question18", value);
                }}
                value={formData.question18}
              >
                <View style={styles.radioRow}>
                  <RadioButton value="Yes" />
                  <Text>Yes</Text>
                  <RadioButton value="No" />
                  <Text>No</Text>
                </View>
              </RadioButton.Group>
            </View>

            {/* Question 3 */}
            <View style={styles.radioContainer}>
              <Text style={styles.radioLabel}>
                {t("Questionnaire5.question3")}
              </Text>
              <RadioButton.Group
                onValueChange={(value) => {
                  handleInputChange("question19", value);
                }}
                value={formData.question19}
              >
                <View style={styles.radioRow}>
                  <RadioButton value="Yes" />
                  <Text>Yes</Text>
                  <RadioButton value="No" />
                  <Text>No</Text>
                </View>
              </RadioButton.Group>
            </View>

            {/* Question 4 */}
            <View style={styles.radioContainer}>
              <Text style={styles.radioLabel}>
                {t("Questionnaire5.question4")}
              </Text>
              <RadioButton.Group
                onValueChange={(value) => {
                  handleInputChange("question20", value); // Corrected here
                }}
                value={formData.question20} // Corrected here
              >
                <View style={styles.radioRow}>
                  <RadioButton value="Yes" />
                  <Text>Yes</Text>
                  <RadioButton value="No" />
                  <Text>No</Text>
                </View>
              </RadioButton.Group>
            </View>
          </View>

          {/* Proceed Button */}
          <TouchableOpacity style={styles.button} onPress={handleProceed}>
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MedicalForm;

// Styles
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
    marginTop: 30,
  },
  subheading: {
    fontSize: 14,
    color: "gray",
    fontFamily: "Poppins-Light",
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 10,
    gap: 20,
  },
  button: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
  radioContainer: {
    marginTop: 10,
  },
  radioLabel: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30, // Increased gap between radio buttons
  },
  radioText: {
    fontSize: 16,
    marginLeft: 6, // Space between radio button and text
  },
});
