import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { RadioButton } from "react-native-paper"; // Import RadioButton
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import BackArrow from "@/components/Common/backArrow";
import { ProgressBar } from "@/components/Forms/ProgressBar";
import { useTranslation } from "react-i18next";
import { useLocalSearchParams, useRouter } from "expo-router";

const MedicalForm = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const params = useLocalSearchParams();
  const previousData =
    typeof params.data === "string" ? JSON.parse(params.data) : {};

  const [formData, setFormData] = useState({
    ...previousData,
    question9: "",
    question10: "",
    question11: "",
    question12: "",
  });

  // Function to handle questionnaire inputs
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleProceed = () => {
    console.log("Proceeded to page 4");
    console.log("Form Data:", JSON.stringify(formData));

    const dataString = JSON.stringify(formData);
    router.push({
      pathname: "/Questionnaire4",
      params: { data: dataString },
    });
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardContainer}
      >
        <ScrollView style={styles.container}>
          {/* Back Button */}
          <BackArrow />

          {/* Heading */}
          <Text style={styles.heading}>{t("Questionnaire3.heading")}</Text>
          <Text style={styles.subheading}>
            {t("Questionnaire3.subHeading")}
          </Text>

          {/* Progress Bar */}
          <ProgressBar progress={0.5} />

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            {/* Question 1 */}
            <View style={styles.radioContainer}>
              <Text style={styles.radioLabel}>
                {t("Questionnaire3.question1")}
              </Text>
              <RadioButton.Group
                onValueChange={(value) => handleInputChange("question9", value)}
                value={formData.question9}
              >
                <View style={styles.radioRow}>
                  <View style={styles.radioOption}>
                    <RadioButton value="Yes" color={Colors.light.primary} />
                    <Text style={styles.radioText}>Yes</Text>
                  </View>
                  <View style={styles.radioOption}>
                    <RadioButton value="No" color={Colors.light.primary} />
                    <Text style={styles.radioText}>No</Text>
                  </View>
                </View>
              </RadioButton.Group>
            </View>

            {/* Question 2 */}
            <View style={styles.radioContainer}>
              <Text style={styles.radioLabel}>
                {t("Questionnaire3.question2")}
              </Text>
              <RadioButton.Group
                onValueChange={(value) =>
                  handleInputChange("question10", value)
                }
                value={formData.question10}
              >
                <View style={styles.radioRow}>
                  <View style={styles.radioOption}>
                    <RadioButton value="Yes" color={Colors.light.primary} />
                    <Text style={styles.radioText}>Yes</Text>
                  </View>
                  <View style={styles.radioOption}>
                    <RadioButton value="No" color={Colors.light.primary} />
                    <Text style={styles.radioText}>No</Text>
                  </View>
                </View>
              </RadioButton.Group>
            </View>

            {/* Question 3 */}
            <View style={styles.radioContainer}>
              <Text style={styles.radioLabel}>
                {t("Questionnaire3.question3")}
              </Text>
              <RadioButton.Group
                onValueChange={(value) =>
                  handleInputChange("question11", value)
                }
                value={formData.question11}
              >
                <View style={styles.radioRow}>
                  <View style={styles.radioOption}>
                    <RadioButton value="Yes" color={Colors.light.primary} />
                    <Text style={styles.radioText}>Yes</Text>
                  </View>
                  <View style={styles.radioOption}>
                    <RadioButton value="No" color={Colors.light.primary} />
                    <Text style={styles.radioText}>No</Text>
                  </View>
                </View>
              </RadioButton.Group>
            </View>

            {/* Question 4 */}
            <View style={styles.radioContainer}>
              <Text style={styles.radioLabel}>
                {t("Questionnaire3.question4")}
              </Text>
              <RadioButton.Group
                onValueChange={(value) =>
                  handleInputChange("question12", value)
                }
                value={formData.question12}
              >
                <View style={styles.radioRow}>
                  <View style={styles.radioOption}>
                    <RadioButton value="Yes" color={Colors.light.primary} />
                    <Text style={styles.radioText}>Yes</Text>
                  </View>
                  <View style={styles.radioOption}>
                    <RadioButton value="No" color={Colors.light.primary} />
                    <Text style={styles.radioText}>No</Text>
                  </View>
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardContainer: {
    flex: 1,
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
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioText: {
    fontSize: 16,
    marginLeft: 20, // Space between radio button and text
  },
});
