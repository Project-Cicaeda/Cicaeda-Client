import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
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
    question5: "",
    question6: "",
    question7: "",
    question8: "",
  });

  //function to handle questionnaire inputs

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleProceed = () => {
    console.log("Procceded to page 3");
    console.log("Form Data:", JSON.stringify(formData));

    const dataString = JSON.stringify(formData);
    router.push({
      pathname: "/Questionnaire3",
      params: { data: dataString },
    });
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <BackArrow />

      {/* Heading */}
      <Text style={styles.heading}>{t("Questionnaire2.heading")}</Text>
      <Text style={styles.subheading}>{t("Questionnaire2.subHeading")}</Text>

      {/* Progress Bar */}
      <ProgressBar progress={0.25} />

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <InputLayout
          label="Age"
          placeholder={t("Questionnaire2.question1")}
          icon="user"
          onBlur={(text) => handleInputChange("question5", text)}
        />

        <View style={styles.radioContainer}>
          <Text style={styles.radioLabel}>{t("Questionnaire2.question2")}</Text>
          <RadioButton.Group
            onValueChange={(value) => {
              handleInputChange("question6", value);
            }}
            value={formData.question3}
          >
            <View style={styles.radioRow}>
              <RadioButton value="Male" />
              <Text>Male</Text>
              <RadioButton value="Female" />
              <Text>Female</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.radioContainer}>
          <Text style={styles.radioLabel}>{t("Questionnaire2.question3")}</Text>
          <RadioButton.Group
            onValueChange={(value) => {
              handleInputChange("question7", value);
            }}
            value={formData.question3}
          >
            <View style={styles.radioRow}>
              <RadioButton value="Yes" />
              <Text>Yes</Text>
              <RadioButton value="No" />
              <Text>No</Text>
            </View>
          </RadioButton.Group>
        </View>

        <View style={styles.radioContainer}>
          <Text style={styles.radioLabel}>{t("Questionnaire2.question4")}</Text>
          <RadioButton.Group
            onValueChange={(value) => {
              handleInputChange("question8", value);
            }}
            value={formData.question3}
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
    </View>
  );
};

export default MedicalForm;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
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

  radioContainer: {
    marginTop: 10,
  },
  radioLabel: {
    fontSize: 16,
    fontWeight: "500",
  },
  radioRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 5,
  },
});
