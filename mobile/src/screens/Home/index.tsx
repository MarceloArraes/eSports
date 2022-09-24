import { Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { logoImg } from "../../assets/logo-nlw-esports.png";
import { styles } from "./styles";
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";
import { GAMES } from "../../utils/games";
import { EvilIcons } from "@expo/vector-icons";
import { GameCardProps } from "../../components/GameCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const [gamesList, setGamesList] = useState<GameCardProps[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const navigation = useNavigation();
  useEffect(() => {
    fetch("http://192.168.15.33:3000/games")
      .then((res) => res.json())
      .then((data) => {
        setGamesList(data);
        setLoading(false);
      });
  }, []);

  const handleOpenGame = ({ id, title, banner }: GameCardProps) => {
    navigation.navigate("game", { id, title, bannerUrl: banner });
  };

  if (loading)
    return (
      <Background>
        <SafeAreaView
          style={{
            height: "100%",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EvilIcons name="spinner-3" size={48} color="white" />
        </SafeAreaView>
      </Background>
    );

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />
        <FlatList
          data={gamesList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
};