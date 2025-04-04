import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router"; // Usamos useRouter para la redirección

export default function IniciarSesion() {
  const [usuario, setUsuario] = useState(""); // Estado para el usuario
  const [contrasena, setContrasena] = useState(""); // Estado para la contraseña
  const router = useRouter(); // Hook para manejar la redirección

  // Función para manejar el inicio de sesión
  const iniciarSesion = () => {
    if (usuario && contrasena) {
      alert("Iniciaste sesión con éxito");
      // Lógica para redirigir a la página principal después del login
    } else {
      alert("Por favor ingresa usuario y contraseña");
    }
  };

  return (
    <LinearGradient colors={["#000000", "#038d8d"]} style={styles.background}>
      <View style={styles.triangleUp} />
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
    top: "18%",
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
    bottom: "23.9%",
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
    //backgroundColor: "rgba(0, 0, 0, 0.3)",
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
    top: "17%",
  },
});
