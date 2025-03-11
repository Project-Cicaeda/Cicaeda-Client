import { router } from "expo-router";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useRouter } from "expo-router";

interface CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      {children}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  );
};

const handleProceed = () => {
  router.push("/Questionnaire");
};

const LandingPage = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: "https://example.com/background.jpg" }}
        style={styles.backgroundImage}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.projectTitle}>Project Cicaeda</Text>
          <View style={styles.profileIcon}></View>
        </View>
        <View style={styles.profileSection}>
          <View style={styles.profilePlaceholder}></View>
          <Text style={styles.welcomeText}>Hello User</Text>
          <TouchableOpacity style={styles.buttonSmall}></TouchableOpacity>
        </View>
        <View style={styles.descriptionBox}>
          <Text style={styles.descriptionText}>
            Your ultimate companion for daily productivity and fun
          </Text>
        </View>
      </ImageBackground>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.header}>Features of Project Cicada</Text>

        <Card
          title="Accurate Predictions"
          description="Our advanced algorithm analyzes your responses to the questionnaire."
        >
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>📈</Text>
          </View>
        </Card>

        <Card
          title="Multilingual Support"
          description="Our app is available in multiple languages."
        >
          <View style={styles.languageContainer}>
            <Text style={styles.newTag}>NEW</Text>
            <Text style={styles.language}>සිංහල</Text>
            <Text style={styles.language}>English</Text>
            <Text style={styles.language}>Tamil</Text>
          </View>
        </Card>

        <Card
          title="Recommendations"
          description="Receive suggestions to maintain good kidney health."
        >
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>📊</Text>
          </View>
        </Card>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/Questionnaire")}
        >
          <Text style={styles.buttonText}>Go to Questionnaire</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  backgroundImage: {
    width: "100%",
    height: 250,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  projectTitle: {
    fontSize: 19,
    // fontWeight: "bold",
    fontFamily: "Poppins-Light",
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#ccc",
  },
  profileSection: {
    alignItems: "center",
    marginTop: 20,
  },
  profilePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#aaa",
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonSmall: {
    width: 40,
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    marginTop: 5,
  },
  descriptionBox: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#E4F8FA",
    borderRadius: 10,
    alignItems: "center",
  },
  descriptionText: {
    fontSize: 16,
    textAlign: "center",
  },
  content: {
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 27,
    fontWeight: "700",
    color: "#555C67",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#E4F8FA",
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#30363A",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: "#464E56",
    textAlign: "center",
    marginTop: 5,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: "#333",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 24,
    color: "#4CAF50",
  },
  languageContainer: {
    alignItems: "center",
  },
  newTag: {
    color: "#4CAF50",
    fontWeight: "bold",
    marginBottom: 5,
  },
  language: {
    color: "#384C3F",
    fontSize: 16,
  },
});

export default LandingPage;
