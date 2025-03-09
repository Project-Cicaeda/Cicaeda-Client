import BackArrow from "@/components/Common/backArrow";
import { InputLayout } from "@/components/Forms/InputLayout";
import { OrSeparator } from "@/components/Forms/OrSeparator";
import { SocialLogin } from "@/components/Forms/socialLogin";
import { Headings } from "@/components/Heading/headings";
import { Colors } from "@/constants/Colors";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

const Login: React.FC = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  //State to store email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //function to handle login
  const handleLogin = () => {
    console.log("Email :", email);
    console.log("Password :", password);

    //authentication logic here
  };

  return (
    <View style={styles.container}>
      <View>
        <BackArrow />
      </View>
      <View style={styles.inputContent}>
        <View style={styles.inputTexts}>
          <Headings heading={t("login.title")} tagLine={t("login.tagline")} />
        </View>
        <View style={styles.inputForms}>
          <View style={styles.marginLayer}>
            <InputLayout
              label={t("login.emailAddress")}
              placeholder={t("login.emailAddress")}
              icon="mail"
              onBlur={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.marginLayer}>
            <InputLayout
              label={t("login.password")}
              placeholder={t("login.password")}
              icon="key"
              onBlur={(text) => setPassword(text)}
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
              {t("login.forgotPassword")}
            </Text>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => router.push("/landing")}>
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
        <View style={styles.socialLogins}>
          <SocialLogin />
          <SocialLogin />
          <SocialLogin />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontFamily: "Poppins-Light", textAlign: "center" }}>
            {t("login.unRegistered")}
          </Text>
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
