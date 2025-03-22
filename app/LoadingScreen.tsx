import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  Animated,
  Text,
  ActivityIndicator,
  Modal,
  Dimensions,
} from "react-native";

// Get screen dimensions for responsive design
const { width, height } = Dimensions.get("window");

interface LoadingScreenProps {
  isVisible: boolean;
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  isVisible,
  onLoadingComplete,
}) => {
  const [fadeAnim] = useState<Animated.Value>(new Animated.Value(0));
  const [scaleAnim] = useState<Animated.Value>(new Animated.Value(0.95));

  useEffect(() => {
    if (isVisible) {
      // Reset animations
      fadeAnim.setValue(0);
      scaleAnim.setValue(0.95);

      // Create parallel animations for fade and scale
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ]).start();

      // Set timeout to call onLoadingComplete after 5 seconds
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 5000);

      // Clean up timer on component unmount or when modal is hidden
      return () => clearTimeout(timer);
    }
  }, [isVisible, fadeAnim, scaleAnim, onLoadingComplete]);

  return (
    <Modal
      transparent={false}
      visible={isVisible}
      animationType="fade"
      onRequestClose={() => {}}
    >
      <View style={styles.splashContainer}>
        <Animated.View
          style={[
            styles.contentContainer,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          {/* Logo with shadow */}
          <View style={styles.logoWrapper}>
            <Image
              source={require("../assets/images/logo.jpg")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Loading spinner with pulsing effect */}
          <View style={styles.spinnerContainer}>
            <ActivityIndicator size="large" color="#4a90e2" />
            <Text style={styles.loadingText}>Logging in...</Text>
          </View>
        </Animated.View>

        {/* Background design element */}
        <View style={styles.backgroundCircle} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.85,
    paddingVertical: 40,
    paddingHorizontal: 30,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    zIndex: 10,
  },
  logoWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
  },
  spinnerContainer: {
    alignItems: "center",
    marginTop: 10,
    width: "100%",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: "500",
    color: "#555",
    textAlign: "center",
  },
  backgroundCircle: {
    position: "absolute",
    width: width * 1.5,
    height: width * 1.5,
    borderRadius: (width * 1.5) / 2,
    backgroundColor: "rgba(74, 144, 226, 0.05)",
    bottom: -width * 0.7,
    zIndex: 1,
  },
});

export default LoadingScreen;
