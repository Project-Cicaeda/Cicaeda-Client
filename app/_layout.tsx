import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Poppins-Bold": require('../assets/fonts/Poppins-Bold.ttf'),
    "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf'),
    "Poppins-Regular": require('../assets/fonts/Poppins-Regular.ttf'),
    "PlaywriteSK-Regular": require('../assets/fonts/PlaywriteSK-Regular.ttf'),
    "wondra": require('../assets/fonts/Wondra.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <Stack screenOptions={{
        headerShown:false
      }}>
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" /> */}
        <Stack.Screen name='login'/>
        <Stack.Screen name='register'/>
      </Stack>
  );
}
