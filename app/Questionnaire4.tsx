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
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const MedicalForm = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    question3: "",
    question4: "",
  });

  // Function to handle questionnaire inputs
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
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
          <Text style={styles.heading}>{t("Questionnaire4.heading")}</Text>
          <Text style={styles.subheading}>
            {t("Questionnaire4.subheading")}
          </Text>

          {/* Progress Bar */}
          <ProgressBar progress={0.75} />

          {/* Input Fields */}
          <View style={styles.inputContainer}>
            <InputLayout
              label="Age"
              placeholder={t("Questionnaire4.question1")}
              icon="user"
              onBlur={(text) => handleInputChange("age", text)}
            />

            <InputLayout
              label="Gender"
              placeholder={t("Questionnaire4.question2")}
              icon="user"
              onBlur={(text) => handleInputChange("gender", text)}
            />
            <InputLayout
              label="Question 3"
              placeholder={t("Questionnaire4.question3")}
              icon="user"
              onBlur={(text) => handleInputChange("question3", text)}
            />
            <InputLayout
              label="Question 4"
              placeholder={t("Questionnaire4.question4")}
              icon="user"
              onBlur={(text) => {
                handleInputChange("question4", text);
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
