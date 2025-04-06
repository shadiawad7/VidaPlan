import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, Stack } from "expo-router"; // Usamos useRouter para la redirección, importamos Stack también

export default function PaginaPrincipal() {
    const [usuario, setUsuario] = useState(""); // Estado para el usuario
    const [contrasena, setContrasena] = useState(""); // Estado para la contraseña
    const router = useRouter(); // Hook para manejar la redirección
    const handlePress = () => {
      Alert.alert("You pressed the image button!");
    };
  
    return (
      <>
        {/* Oculta el header de la pantalla */}
        <Stack.Screen options={{ headerShown: false }} />
      <LinearGradient colors={["#000000", "#038d8d"]} style={styles.background}>
        <Text style={styles.lineTextVidaPlan}>VIDA PLAN</Text>
        <View style={styles.topLine} />
        <Text style={styles.lineTextPaginaPrincipal}>PAGINA PRINCIPAL</Text>

        <Text style={styles.lineTextNotificaciones}>Notificaciones</Text>
        <Image 
            source={require("../assets/images/notificacionesOn.png")}
            style={styles.imageNotificaciones}
            resizeMode="contain"
          />

        <TouchableOpacity style={styles.squareEsencialesButton} onPress={handlePress}>
          <Image
            source={require("../assets/images/gastosesenciales.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.lineTextGastosEsenciales}>Gastos Esenciales</Text>

        <TouchableOpacity style={styles.squarePersonalesButton} onPress={handlePress}>
          <Image
            source={require("../assets/images/gastospersonales.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.lineTextGastosPersonales}>Gastos Personales</Text>


        <TouchableOpacity style={styles.squarePerfilButton} onPress={handlePress}>
          <Image
            source={require("../assets/images/perfil.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.lineTextPerfil}>Perfil</Text>


        <TouchableOpacity style={styles.squareTotalButton} onPress={handlePress}>
          <Text style={styles.lineTextTotalDentroBoton}>300</Text>
        </TouchableOpacity>
        <Text style={styles.lineTextTotal}>Total</Text>

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
    },
    lineTextPaginaPrincipal: {
      position: "absolute",
      top: "25%",
      color: "white",
      fontSize: 14,
      fontWeight: "bold",
    },
    lineTextGastosEsenciales: {
      position: "absolute",
      top: "49%",
      left: "17%",
      color: "white",
      fontSize: 13,
      fontWeight: "bold",
    },
    lineTextGastosPersonales: {
      position: "absolute",
      top: "49%",
      left: "56%",
      color: "white",
      fontSize: 13,
      fontWeight: "bold",
    },
    lineTextPerfil: {
      position: "absolute",
      top: "62%",
      color: "white",
      fontSize: 13,
      fontWeight: "bold",
    },
    lineTextTotal: {
      position: "absolute",
      top: "76%",
      color: "white",
      fontSize: 13,
      fontWeight: "bold",
    },
    lineTextTotalDentroBoton: {
      justifyContent: "center",
      alignItems: "center",
      color: "black",
      fontSize: 20,
      fontWeight: "bold",
    },
      squarePerfilButton: {
        width: 60,
        height: 60,
        top: "4%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      },
      squareEsencialesButton: {
        width: 60,
        height: 60,
        top: "5%",
        left: "-20%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      },
      squarePersonalesButton: {
        width: 60,
        height: 60,
        top: "-2%",
        left: "20%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      },
      squareTotalButton: {
        width: 60,
        height: 60,
        top: "11%",
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      },
      image: {
        width: "70%",
        height: "70%",
        resizeMode: "cover",
      },
      lineTextNotificaciones: {
        position: "absolute",
        top: "30%",
        left: "36%",
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
      },
      imageNotificaciones: {
        position: "absolute",
        top: "28.2%",
        left: "60%",
        width: "5.5%",
        height: "5.5%",
        resizeMode: "cover",
      },
  });