import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper"; // Import RadioButton
import { InputLayout } from "@/components/Forms/InputLayout";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import BackArrow from "@/components/Common/backArrow";
import { ProgressBar } from "@/components/Forms/ProgressBar";
import { useTranslation } from "react-i18next";
import { useLocalSearchParams, useRouter } from "expo-router";

const MedicalForm = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const params = useLocalSearchParams();

  const previousData =
    typeof params.data === "string" ? JSON.parse(params.data) : {};

  const [formData, setFormData] = useState({
    ...previousData,
    age: "",
    gender: "",
    anemia: "",
    question8: "",
  });

  // Function to handle questionnaire inputs
  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleProceed = () => {
    console.log("Proceeded to page 3");
    console.log("Form Data:", JSON.stringify(formData));

    const dataString = JSON.stringify(formData);
    router.push({
      pathname: "/Questionnaire3",
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
          <Text style={styles.heading}>{t("Questionnaire2.heading")}</Text>
          <Text style={styles.subheading}>
            {t("Questionnaire2.subHeading")}
          </Text>

          {/* Progress Bar */}
          <ProgressBar progress={0.25} />

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <InputLayout
              label="Age"
              placeholder={t("Questionnaire2.question1")}
              icon="user"
              onBlur={(text) => handleInputChange("age", text)}
            />

            <View style={styles.radioContainer}>
              <Text style={styles.radioLabel}>
                {t("Questionnaire2.question2")}
              </Text>
              <RadioButton.Group
                onValueChange={(value) => {
                  handleInputChange("gender", value);
                }}
                value={formData.gender}
              >
                <View style={styles.radioRow}>
                  <View style={styles.radioOption}>
                    <RadioButton value="Male" color={Colors.light.primary} />
                    <Text style={styles.radioText}>Male</Text>
                  </View>
                  <View style={styles.radioOption}>
                    <RadioButton value="Female" color={Colors.light.primary} />
                    <Text style={styles.radioText}>Female</Text>
                  </View>
                </View>
              </RadioButton.Group>
            </View>

            <View style={styles.radioContainer}>
              <Text style={styles.radioLabel}>
                {t("Questionnaire2.question3")}
              </Text>
              <RadioButton.Group
                onValueChange={(value) => {
                  handleInputChange("anemia", value);
                }}
                value={formData.anemia}
              >
                <View style={styles.radioRow}>
                  <RadioButton value="Yes" color={Colors.light.primary} />
                  <Text style={styles.radioText}>Yes</Text>
                  <RadioButton value="No" color={Colors.light.primary} />
                  <Text style={styles.radioText}>No</Text>
                </View>
              </RadioButton.Group>
            </View>

            <View style={styles.radioContainer}>
              <Text style={styles.radioLabel}>
                {t("Questionnaire2.question4")}
              </Text>
              <RadioButton.Group
                onValueChange={(value) => {
                  handleInputChange("question8", value);
                }}
                value={formData.question8}
              >
                <View style={styles.radioRow}>
                  <RadioButton value="Yes" color={Colors.light.primary} />
                  <Text style={styles.radioText}>Yes</Text>
                  <RadioButton value="No" color={Colors.light.primary} />
                  <Text style={styles.radioText}>No</Text>
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
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioText: {
    fontSize: 16,
    marginLeft: 8, // Space between radio button and text
  },
});
