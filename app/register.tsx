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
const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleInputChange(field: string, value: string) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function RegisterClick() {
    if (formData.email && formData.name && formData.password) {
      try {
        const response = await axios.post(
          `https://cicaeda-me-539607477024.us-central1.run.app/auth/signup `,
          formData
        );
        ToastAndroid.show("Registration Successful!", ToastAndroid.SHORT);
        router.replace("/login");
      } catch (error: any) {
        console.log(error?.response);
        if (error?.response?.data.statusCode == 400) {
          ToastAndroid.show(error?.response?.data.message, ToastAndroid.SHORT);
          return;
        }
        ToastAndroid.show(error?.response?.data.message[0], ToastAndroid.SHORT);
        console.log(error?.response, "ERROR");
      }
    } else {
      ToastAndroid.show("All The Fields Are Required", ToastAndroid.SHORT);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <BackArrow />
      </View>
      <View style={styles.inputContent}>
        <View style={styles.inputTexts}>
          <Headings
            heading="Register To Cicaeda!"
            tagLine="Predicting Kidney Health for a Better Tomorrow"
          />
        </View>
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
            <InputLayout
              label="Password"
              placeholder="Password"
              icon="key"
              onBlur={(text) => handleInputChange("password", text)}
            />
          </View>
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
