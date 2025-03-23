import BackArrow from "@/components/Common/backArrow";
import { InputLayout } from "@/components/Forms/InputLayout";
import { OrSeparator } from "@/components/Forms/OrSeparator";
import { SocialLogin } from "@/components/Forms/socialLogin";
import { Headings } from "@/components/Heading/headings";
import { Colors } from "@/constants/Colors";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { ipAddress } from "@/components/Common/ipAddress";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
} from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { storeItem } from "@/components/Common/StorageOperations";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SecuredInput } from "@/components/Forms/SecuredInput";

const Login: React.FC = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  // State to manage form data (email and password)
  const [formData, setFormData] = useState({
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

  // Function to handle login button click
  async function LoginClick() {
    // Check if both email and password are provided
    if (formData.email && formData.password) {
      try {
        // Make a POST request to the login API endpoint
        const response = await axios.post(
          `https://cicaeda-me-539607477024.us-central1.run.app/auth/login `,
          formData
        );

        // Store the user data in AsyncStorage
        const storeUser = await storeItem(response.data);

        // Show success toast and navigate to the home screen
        ToastAndroid.show("Login Successful!", ToastAndroid.SHORT);
        router.replace("/home");
      } catch (error: any) {
        // Handle errors from the API
        console.log(error.response);
        if (error.response.data?.statusCode == 401) {
          ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT);
          return;
        }
        ToastAndroid.show(error.response.data.message[0], ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show("All The Fields Are Required", ToastAndroid.SHORT);
    }
  }

  // useEffect to fetch stored user data from AsyncStorage
  useEffect(() => {
    const fetchData = async () => {
      const storedItems: any = await AsyncStorage.getItem("user");
      if (storeItem != null) {
        const jsonParse = JSON.parse(storedItems);
        console.log(jsonParse);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Back arrow for navigation */}
      <View>
        <BackArrow />
      </View>

      {/* Main content */}
      <View style={styles.inputContent}>
        {/* Headings for the login screen */}
        <View style={styles.inputTexts}>
          <Headings heading={t("login.title")} tagLine={t("login.tagline")} />
        </View>

        {/* Input forms for email and password */}
        <View style={styles.inputForms}>
          <View style={styles.marginLayer}>
            <InputLayout
              label={t("login.emailAddress")}
              placeholder={t("login.emailAddress")}
              icon="mail"
              onBlur={(text) => handleInputChange("email", text)} // Update email on blur
            />
          </View>
          <View style={styles.marginLayer}>
            <SecuredInput
              secureTextEntry={true}
              label={t("login.password")}
              placeholder={t("login.password")}
              icon="key"
              onBlur={(text) => handleInputChange("password", text)} // Update password on blur
            />
          </View>
          <View
            style={[styles.marginLayer, { marginVertical: 10, marginLeft: 5 }]}
          >
            <Link href="/ForgotPassword">
              <Text
                style={{
                  fontFamily: "Poppins-Light",
                  color: Colors.light.primary,
                }}
              >
                {t("login.forgotPassword")}
              </Text>
            </Link>
          </View>
        </View>

        {/* Login button */}
        <View style={styles.button}>
          <TouchableOpacity onPress={LoginClick}>
            <Text
              style={{
                color: "#fff",
                fontFamily: "Poppins-Bold",
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <OrSeparator />
        </View>

        {/* Link to the registration screen */}
        <View style={{ marginVertical: 10 }}>
          <Link href="/register">
            <Text style={{ fontFamily: "Poppins-Light", textAlign: "center" }}>
              {t("login.unRegistered")}
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: "100%",
  },
  inputContent: {
    paddingVertical: 15,
  },
  inputTexts: {
    width: "100%",
  },
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
  line: {
    width: 100,
    height: 1,
    marginHorizontal: 10,
    backgroundColor: Colors.light.primary,
  },
});
