import { i18n } from "@/assets/locales/i18n";
import { fetchData } from "@/components/Common/StorageOperations";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import "react-native-reanimated";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "PlaywriteSK-Regular": require("../assets/fonts/PlaywriteSK-Regular.ttf"),
    wondra: require("../assets/fonts/Wondra.ttf"),
  });


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() =>{
    async function getUser(){
      const user = await fetchData("user")
      if(user){
        router.replace("/home")
      }
    }

    getUser()
  },[loaded])


  if (!loaded) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" /> */}
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="selectLanguage" />
        <Stack.Screen name="questionnaire" />
        <Stack.Screen name="ForgetPassword" />
        <Stack.Screen name="ResetPassword" />
      </Stack>
    </I18nextProvider>
  );
}
