import { Colors } from "@/constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useRef, useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

interface InputLayoutProps {
  label: string;
  placeholder: string;
  icon: any;
  onBlur?: (text: string) => void;
}

export const InputLayout: React.FC<InputLayoutProps> = ({
  label,
  placeholder,
  icon,

  onBlur,
}) => {
  let inputRef = useRef("");

  return (
    <View>
      <View style={styles.textContainer}>
        <Text style={styles.textProps}>{label}</Text>
      </View>
      <View style={styles.textinput}>
        <AntDesign name={icon} size={24} color="black" />
        <TextInput
          placeholder={placeholder}
          style={{ fontFamily: "Poppins-Light", marginHorizontal: 5 }}
          //   onChangeText={(text) => (inputRef.current = text)}
          onBlur={() => onBlur?.(inputRef.current)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 10,
  },
  textProps: {
    fontFamily: "Poppins-Light",
  },
  textinput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Colors.light.primary,
  },
});
