import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authSlice";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const handleRegister = () => {
    dispatch(registerUser({ email, password }));
  };

  return (
    <View style={styles.container}>
      <Text>Registro</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Button title="Registrarse" onPress={handleRegister} />
      {status === "loading" && <Text>Cargando...</Text>}
      {error && <Text style={styles.error}>{error}</Text>}
      <Text onPress={() => navigation.navigate("Login")}>¿Ya tenés cuenta? Iniciar sesión</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderBottomWidth: 1, marginBottom: 12 },
  error: { color: "red", marginTop: 8 },
});
