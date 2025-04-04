import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

export default function IniciarSesion() {
  return (
    <LinearGradient colors={["#000000", "#038d8d"]} style={styles.background}>
      <View style={styles.triangleUp} />
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Usuario" placeholderTextColor="#ddd" />
        <TextInput style={styles.input} placeholder="Contraseña" placeholderTextColor="#ddd" secureTextEntry />
      </View>
      <TouchableOpacity style={styles.fingerprintButton}>
        <MaterialIcons name="fingerprint" size={50} color="white" />
      </TouchableOpacity>
      <View style={styles.triangleDown} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  triangleUp: {
    position: "absolute",
    top: "19%",
    width: 0,
    height: 0,
    borderLeftWidth: 70,
    borderRightWidth: 70,
    borderBottomWidth: 120,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "white",
  },
  triangleDown: {
    position: "absolute",
    bottom: "26%",
    width: 0,
    height: 0,
    borderLeftWidth: 70,
    borderRightWidth: 70,
    borderTopWidth: 120,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "white",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Fondo semitransparente para mejor legibilidad
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  input: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    color: "white",
  },
  fingerprintButton: {
    //marginTop: 20,
    top: "22%",
  },
});
