import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, Stack } from "expo-router"; // Usamos useRouter para la redirección, importamos Stack también

export default function PaginaPrincipal() {
    const [usuario, setUsuario] = useState(""); // Estado para el usuario
    const [contrasena, setContrasena] = useState(""); // Estado para la contraseña
    const router = useRouter(); // Hook para manejar la redirección
  
    return (
      <>
        {/* Oculta el header de la pantalla */}
        <Stack.Screen options={{ headerShown: false }} />
      <LinearGradient colors={["#000000", "#038d8d"]} style={styles.background}>
        <Text style={styles.lineTextVidaPlan}>VIDA PLAN</Text>
        <View style={styles.topLine} />
        <Text style={styles.lineTextPaginaPrincipal}>PAGINA PRINCIPAL</Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push("../iniciarsesion")}>
            <Text style={styles.buttonText}>Volver</Text>
          </TouchableOpacity>

      </LinearGradient>
      </>
    );
  }

  const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    topLine: {
      position: "absolute",
      top: "22%",
      height: 6, // Grosor de la línea
      width: "65%", // O 100% si quieres que vaya de borde a borde
      backgroundColor: "yellow",
      borderRadius: 3,
    },
    lineTextVidaPlan: {
      position: "absolute",
      top: "17%",
      color: "white",
      fontSize: 25,
      fontWeight: "bold",
      marginBottom: 5, // Espacio entre texto y línea
    },
    lineTextPaginaPrincipal: {
      position: "absolute",
      top: "25%",
      color: "white",
      fontSize: 13,
      fontWeight: "bold",
      marginBottom: 5, // Espacio entre texto y línea
    },
    button: {
        padding: 15,
        backgroundColor: "#038d8d",
        borderRadius: 5,
        marginTop: 10,
        width: "46%",
        alignItems: "center",
      },
      buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
      },
  });