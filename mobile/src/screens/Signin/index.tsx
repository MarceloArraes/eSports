import { View, Image, TouchableOpacity, Text } from "react-native";
import { Background } from "../../components/Background";
import { logoImg } from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { SafeAreaView } from "react-native-safe-area-context";
import * as AuthSession from "expo-auth-session";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { GameController } from "phosphor-react-native";
import { Dispatch } from "react";
import { IUser } from "../Home";
// imagem do usário.
//https://cdn.discordapp.com/avatars/513107560568717323/00048d1392244638e76a7e4f39af4f80.png

interface IsetAuthSuccess {
  setAuthSuccess: Dispatch<Boolean>;
}
interface IsetUser {
  setUser: Dispatch<IUser>;
}

interface Props {
  setAuthSuccess: Dispatch<Boolean>;
  setUser: Dispatch<IUser>;
}

type AuthSessionResult = {
  type: "error" | "success";
  errorCode?: string | null;
  error?: AuthSession.AuthError | null | undefined;
  params: Record<string, string>;
  authentication?: AuthSession.TokenResponse | null;
  url?: string;
};

const setUserData = ({ setUser }: IsetUser, response: AuthSessionResult) => {
  const accessToken = response.params.access_token;

  fetch("https://discord.com/api/users/@me", {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setUser(data);
    });
};

export function Signin({ setAuthSuccess, setUser }: Props) {
  const handleSignin = async () => {
    const response = (await AuthSession.startAsync({
      authUrl:
        "https://discord.com/api/oauth2/authorize?client_id=1025365274532261929&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40marcelupin%2Fesports-duo-matchmaker&response_type=token&scope=identify",
    })) as AuthSessionResult;
    console.log("RESPONSE", response);

    if ((response.type = "success")) {
      setUserData({ setUser }, response);
      setAuthSuccess(true);
    }
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
