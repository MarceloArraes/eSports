import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { GameParams } from "../../@types/navigation";
import { Entypo } from "@expo/vector-icons";
import { THEME } from "../../theme";
import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import { DuoMatch } from "../../components/DuoMatch";

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState<string>("");

  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const getDiscordUser = async (adsId: string) => {
    fetch(`http://192.168.15.33:3000/ads/${adsId}/discord`)
      .then((res) => res.json())
      .then((data) => {
        console.log("DISCORDDDD", data);
        setDiscordDuoSelected(data.discord);
      });
  };

  useEffect(() => {
    fetch(`http://192.168.15.33:3000/games/${game.id}/ads`)
      .then((res) => res.json())
      .then((data) => {
        console.log("DATSSSS", data);
        setDuos(data);
      });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity onPress={handleGoBack}>
              <Entypo
                size={20}
                name="chevron-thin-left"
                color={THEME.COLORS.CAPTION_300}
              />
            </TouchableOpacity>
            <Image source={logoImg} style={styles.logo} />
            <View style={styles.right} />
          </View>
          <Image
            source={{ uri: game.bannerUrl }}
            style={styles.cover}
            resizeMode="contain"
          />
          <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />
          <FlatList
            data={duos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <DuoCard
                data={item}
                onConnect={() => {
                  getDiscordUser(item.id);
                }}
              />
            )}
            horizontal
            contentContainerStyle={[
              styles.contentList,
              duos.length === 0 && {
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
            style={styles.containerList}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={() => (
              <Text style={styles.emptyListText}>
                Não há anuncios publicados ainda.
              </Text>
            )}
          />
          <DuoMatch
            onClose={() => setDiscordDuoSelected("")}
            visible={discordDuoSelected.length > 0}
            discord={discordDuoSelected}
          />
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
}
