import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const GFButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={["#ffe600", "#ff8c00"]} style={styles.button}>
        <Text style={styles.label}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GFButton;

const styles = StyleSheet.create({
  button: {
    width: 220,
    height: 55,
    backgroundColor: "#f0d124",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
  },
  label: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "700",
  },
});
