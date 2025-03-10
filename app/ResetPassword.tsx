import BackArrow from "@/components/Common/backArrow";
import { InputLayout } from "@/components/Forms/InputLayout";
import { Headings } from "@/components/Heading/headings";
import { Colors } from "@/constants/Colors";

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
import { useEffect, useState } from "react";
import axios from "axios";
import { storeItem } from "@/components/Common/StorageOperations";
import AsyncStorage from "@react-native-async-storage/async-storage";
import API from "@/components/Common/UpdateTokens";

const ForgotPassword: React.FC = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [formData,setFormData] = useState({
    "oldPassword":"",
    "newPassword":""
})

    function handleInputChange(field:string,value:string){
      setFormData((prev) =>({
          ...prev,
          [field] : value
      }))
    }

    async function SendResetCode(){
      const data = {"oldPassword":"123456789","newPassword":"012345678"}
      try{
        const response = await API.put("/auth/change-password",data)
        console.log(response)
      }
      catch(error:any){
        console.log(error.response.data)
      }

    }   


  return (
    <View style={styles.container}>
      <View>
        <BackArrow />
      </View>
      <View style={styles.inputContent}>
        <View style={styles.inputTexts}>
          <Headings heading={t("resetPassword.title")} tagLine={t("resetPassword.tagline")} />
        </View>
        <View style={styles.inputForms}>
          <View style={styles.marginLayer}>
            <InputLayout
              label={t("resetPassword.password")}
              placeholder={t("resetPassword.newPassword")}
              icon="mail"
              onBlur={(text) => handleInputChange("oldPassword",text)}
            />
          </View>
          <View style={styles.marginLayer}>
            <InputLayout
              label={t("resetPassword.confirmPassword")}
              placeholder={t("resetPassword.confirmNewPassword")}
              icon="mail"
              onBlur={(text) => handleInputChange("newPassword",text)}
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
              Reset Password
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
