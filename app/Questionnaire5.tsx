import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { InputLayout } from "@/components/Forms/InputLayout";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import BackArrow from "@/components/Common/backArrow";
import { ProgressBar } from "@/components/Forms/ProgressBar";
import { useTranslation } from "react-i18next";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

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
    question20: "",
  });

  // Function to handle questionnaire inputs
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleProceed = () => {
    console.log("Form Data:", JSON.stringify(formData));

    router.push("/Prediction");
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
            <InputLayout
              label="Age"
              placeholder={t("Questionnaire5.question1")}
              icon="user"
              onBlur={(text) => handleInputChange("question17", text)}
            />

            <InputLayout
              label="Gender"
              placeholder={t("Questionnaire5.question2")}
              icon="user"
              onBlur={(text) => handleInputChange("question18", text)}
            />
            <InputLayout
              label="Question 3"
              placeholder={t("Questionnaire5.question3")}
              icon="user"
              onBlur={(text) => handleInputChange("question19", text)}
            />
            <InputLayout
              label="Question 4"
              placeholder={t("Questionnaire5.question4")}
              icon="user"
              onBlur={(text) => {
                handleInputChange("question20", text);
              }}
            />
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
    marginTop: 27.5,
  },
  subheading: {
    fontSize: 14,
    color: "gray",
    fontFamily: "Poppins-Light",
    marginBottom: 20,
  },
  inputContainer: {
    marginTop: 10,
    gap: 10,
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
});
