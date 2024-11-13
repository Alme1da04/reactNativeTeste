import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Pagina() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const entrar = () => {
    console.log("entrou");
    console.log(email);
    console.log(password);
    alert("Bem vindo!");
  };

  const cadastrar = () => {
    alert("ainda não está pronto!");
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="E-mail"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        keyboardType="email-address"
        onChangeText={(value) => setEmail(value)}
      />
      <Input
        placeholder="Sua senha"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry={true}
      />
      {/* <Button
        icon={<Icon name="check" size={15} color="white" />}
        title="Entrar"
        onPress={() => entrar()}
      /> */}
      <View style={styles.fixToText}>
        <Button title="Entrar" onPress={() => entrar("Entrar")} />
        <Button title="Cadastrar" onPress={() => cadastrar("Cadastrar")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#FFF",
    textAlign: "center",
    backgroundColor: "#FFF6F5",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
