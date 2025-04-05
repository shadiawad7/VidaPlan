import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, Stack } from "expo-router"; // Usamos useRouter para la redirección, importamos Stack también


export default function IniciarSesion() {
  const [usuario, setUsuario] = useState(""); // Estado para el usuario
  const [contrasena, setContrasena] = useState(""); // Estado para la contraseña
  const router = useRouter(); // Hook para manejar la redirección

  // Función para manejar el inicio de sesión
  const iniciarSesion = () => {
    if (usuario && contrasena) {
      alert("Iniciaste sesión con éxito");
      router.push("../paginaprincipal");
    } else {
      alert("Por favor ingresa usuario y contraseña");
    }
  };

  return (
    <>
      {/* Oculta el header de la pantalla */}
      <Stack.Screen options={{ headerShown: false }} />
    <LinearGradient colors={["#000000", "#038d8d"]} style={styles.background}>
      <Text style={styles.lineTextVidaPlan}>VIDA PLAN</Text>
      <View style={styles.topLine} />
      <Text style={styles.lineTextIniciarrSesion}>INICIAR SESION</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#ddd"
          value={usuario}
          onChangeText={setUsuario}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#ddd"
          secureTextEntry
          value={contrasena}
          onChangeText={setContrasena}
        />

        {/* Contenedor para los botones "Entrar" y "Registrar" */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={iniciarSesion}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          {/* Botón para redirigir a la página de registro */}
          <TouchableOpacity style={styles.button} onPress={() => router.push("../registrar")}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.fingerprintButton}>
        <MaterialIcons name="fingerprint" size={50} color="white" />
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
  lineTextIniciarrSesion: {
    position: "absolute",
    top: "25%",
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5, // Espacio entre texto y línea
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "37%",
    padding: 20,
    borderRadius: 10,
    width: "75%",
  },
  input: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 15,
    marginVertical: 6,
    borderRadius: 5,
    color: "white",
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: "row", // Hace que los botones estén en una fila
    justifyContent: "space-between", // Distribuye el espacio entre los botones
    width: "100%", // Asegura que los botones ocupen todo el ancho disponible
  },
  button: {
    padding: 15,
    backgroundColor: "#038d8d",
    borderRadius: 5,
    marginTop: 10,
    width: "46%", // Ajusta el tamaño de cada botón
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  fingerprintButton: {
    position: "absolute",
    top: "75%",
  },
});
