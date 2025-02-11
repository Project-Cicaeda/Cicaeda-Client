import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { InputLayout } from "@/components/Forms/InputLayout";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import BackArrow from "@/components/Common/backArrow";
import { ProgressBar } from "@/components/Forms/ProgressBar";

const MedicalForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    question3: "",
    question4: "",
  });

  //function to handle questionnaire inputs

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <BackArrow />

      {/* Heading */}
      <Text style={styles.heading}>Fill The Below Inputs</Text>
      <Text style={styles.subheading}>
        Enter your medical related data for the below questions.
      </Text>

      {/* Progress Bar */}
      <ProgressBar progress={0.25} />

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <InputLayout
          label="Age"
          placeholder="Enter Your Age"
          icon="user"
          onBlur={(text) => handleInputChange("age", text)}
        />

        <InputLayout
          label="Gender"
          placeholder="Enter Your Gender"
          icon="user"
          onBlur={(text) => handleInputChange("gender", text)}
        />
        <InputLayout
          label="Question 3"
          placeholder="I Need Question NO.3"
          icon="user"
          onBlur={(text) => handleInputChange("question3", text)}
        />
        <InputLayout
          label="Question 4"
          placeholder="I Need Question NO.4"
          icon="user"
          onBlur={(text) => {
            handleInputChange("question4", text);
          }}
        />
      </View>

      {/* Proceed Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Form Data :", formData)}
      >
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
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
    marginTop: 50,
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
