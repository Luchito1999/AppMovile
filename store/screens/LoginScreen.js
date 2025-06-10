import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { status, error, user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
      navigation.replace("Home");
    }
  }, [user]);

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };

  return (
    <View style={styles.container}>
      <Text>Iniciar sesión</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Button title="Ingresar" onPress={handleLogin} />
      {status === "loading" && <Text>Cargando...</Text>}
      {error && <Text style={styles.error}>{error}</Text>}
      <Text onPress={() => navigation.navigate("Register")}>¿No tenés cuenta? Registrate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: { borderBottomWidth: 1, marginBottom: 12 },
  error: { color: "red", marginTop: 8 },
});
