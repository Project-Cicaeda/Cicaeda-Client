import { Colors } from "@/constants/Colors";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
export default function Index() {
  const { t, i18n } = useTranslation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.jpg")} //logo added
        style={styles.logo}
      />

      <TouchableOpacity
        style={styles.globeIcon}
        onPress={() => router.push("/selectLanguage")}
      >
        <Entypo name="globe" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.centerContent}>
        <View>
          <Image
            source={require("../assets/images/landing.jpg")}
            style={{ width: SCREEN_WIDTH, height: 250 }}
          />
        </View>
        <View style={styles.headings}>
          <Text
            style={[
              styles.fontColor,
              { fontFamily: "Poppins-Bold", fontSize: 20, textAlign: "center" },
            ]}
          >
            {t("landing.welcome")}
          </Text>
          <Text
            style={[
              styles.fontColor,
              {
                fontFamily: "Poppins-Light",
                fontSize: 13,
                textAlign: "center",
                marginVertical: 5,
                marginHorizontal: 10,
              },
            ]}
          >
            {t("landing.description")}
          </Text>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/login")}
          >
            <Text style={[styles.fontProps, { color: "#fff" }]}>Login Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: Colors.light.primary,
              },
            ]}
            onPress={() => router.push("/register")}
          >
            <Text style={[styles.fontProps, { color: Colors.light.primary }]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
  },
  centerContent: {
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  headings: {
    marginVertical: 10,
    alignItems: "center",
  },
  buttons: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  button: {
    marginVertical: 5,
    width: SCREEN_WIDTH - 50,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 50,
    backgroundColor: Colors.light.primary,
  },
  fontColor: {
    color: Colors.light.primary,
  },
  fontProps: {
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    fontSize: 15,
  },
  globeIcon: {
    width: 40,
    height: 40,
    alignSelf: "flex-end",
    margin: 20,
    backgroundColor: "#E4E4E4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    position: "relative",
  },

  logo: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: "cover",
  },
});
