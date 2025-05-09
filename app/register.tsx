import BackArrow from "@/components/Common/backArrow";
import { InputLayout } from "@/components/Forms/InputLayout";
import { SocialLogin } from "@/components/Forms/socialLogin";
import { Link, router } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { Headings } from "@/components/Heading/headings";
import { OrSeparator } from "@/components/Forms/OrSeparator";
import axios from "axios";
import { useState } from "react";
import { ipAddress } from "@/components/Common/ipAddress";
import { SecuredInput } from "@/components/Forms/SecuredInput";
const Register: React.FC = () => {
  // State to manage form data (name, email, and password)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Function to handle input changes and update form data
  function handleInputChange(field: string, value: string) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  // Function to handle registration button click
  async function RegisterClick() {
    // Check if all fields are provided
    if (formData.email && formData.name && formData.password) {
      try {
        // Make a POST request to the registration API endpoint
        const response = await axios.post(
          `${ipAddress}/auth/signup `,
          formData
        );

        // Show success toast and navigate to the login screen
        ToastAndroid.show("Registration Successful!", ToastAndroid.SHORT);
        router.replace("/login");
      } catch (error: any) {
        console.log(error?.response?.data, "ERROR RESPONSE");
        const errorMessage = error?.response?.data?.message || "Something went wrong";
        if (Array.isArray(errorMessage)) {
          ToastAndroid.show(errorMessage[0], ToastAndroid.SHORT);
        } else {
          ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
        }
      }
    } else {
      ToastAndroid.show("All The Fields Are Required", ToastAndroid.SHORT);
    }
  }

  return (
    <View style={styles.container}>
      {/* Back arrow for navigation */}
      <View>
        <BackArrow />
      </View>

      {/* Main content container */}
      <View style={styles.inputContent}>
        {/* Headings for the registration screen */}
        <View style={styles.inputTexts}>
          <Headings
            heading="Register To Cicaeda!"
            tagLine="Predicting Kidney Health for a Better Tomorrow"
          />
        </View>

        {/* Input forms for name, email, and password */}
        <View style={styles.inputForms}>
          <View style={styles.marginLayer}>
            <InputLayout
              label="Full Name"
              placeholder="Enter Your Full Name"
              icon="user"
              onBlur={(text) => handleInputChange("name", text)}
            />
          </View>
          <View style={styles.marginLayer}>
            <InputLayout
              label="Email Address"
              placeholder="Email Address"
              icon="mail"
              onBlur={(text) => handleInputChange("email", text)}
            />
          </View>
          <View style={styles.marginLayer}>
            <SecuredInput
              secureTextEntry={true}
              label="Password"
              placeholder="Password"
              icon="key"
              onBlur={(text) => handleInputChange("password", text)}
            />
          </View>

          {/* Link to the login screen */}
          <View
            style={[styles.marginLayer, { marginVertical: 10, marginLeft: 5 }]}
          >
            <Text
              style={{
                fontFamily: "Poppins-Light",
                color: Colors.light.primary,
              }}
            >
              Already Have An Account?<Link href="/login"> Login Now</Link>
            </Text>
          </View>
        </View>

        {/* Register button */}
        <TouchableOpacity style={styles.button} onPress={RegisterClick}>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Poppins-Bold",
              textAlign: "center",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 25,
    height: "100%",
  },
  inputContent: {
    paddingVertical: 15,
  },
  inputTexts: {},
  inputForms: {
    paddingVertical: 10,
  },
  marginLayer: {
    marginVertical: 5,
  },
  button: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 20,
    borderRadius: 50,
  },
  socialLogins: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
});
