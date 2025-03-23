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
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { storeItem } from "@/components/Common/StorageOperations";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ForgotPassword: React.FC = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [formData,setFormData] = useState({
    "email":"",
})

    function handleInputChange(field:string,value:string){
      setFormData((prev) =>({
          ...prev,
          [field] : value
      }))
    }

    async function SendResetCode(){
      // try{
      //   const response  = await axios.post(`http://192.168.8.106:3000/auth/forgot-password`,formData)
      //   console.log(response.data)
      // }
      // catch(error:any){
      //   console.log(error.response)
      // }
      
      router.navigate("/OtpVerify")
    }   


  return (
    <View style={styles.container}>
      <View>
        <BackArrow />
      </View>
      <View style={styles.inputContent}>
        <View style={styles.inputTexts}>
          <Headings heading={t("forgetPassword.title")} tagLine={t("forgetPassword.tagline")} />
        </View>
        <View style={styles.inputForms}>
          <View style={styles.marginLayer}>
            <InputLayout
              label={t("login.emailAddress")}
              placeholder={t("forgetPassword.emailAddress")}
              icon="mail"
              onBlur={(text) => handleInputChange("email",text)}
            />
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={SendResetCode}>
            <Text
              style={{
                color: "#fff",
                fontFamily: "Poppins-Bold",
                textAlign: "center",
              }}
            >
              Send Email / SMS
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;

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
