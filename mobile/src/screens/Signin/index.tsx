import * as dotenv from "dotenv";
dotenv.config();
//require('dotenv').config()
import { View, Image, TouchableOpacity, Text } from "react-native";
import { Background } from "../../components/Background";
import { logoImg } from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { SafeAreaView } from "react-native-safe-area-context";
import * as AuthSession from "expo-auth-session";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { GameController } from "phosphor-react-native";

export function Signin() {
  const handleSignin = async () => {
    const response = await AuthSession.startAsync({
      authUrl: process.env.DISCORD_AUTH_URL as string,
    });

    fetch("https://discord.com/api/users/@me", {
      headers: {
        authorization: `Bearer ${response.params.access_token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log("DATA", data));
    console.log("RESPONSE", response);
  };
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        <TouchableOpacity style={styles.button} onPress={handleSignin}>
          <GameController color={THEME.COLORS.TEXT} size={20} />
          <Text>Entrar com discord</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}
