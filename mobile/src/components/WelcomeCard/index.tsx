import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";

import { styles } from "./styles";
import { IUser } from "../../screens/Home";

export function WelcomeCard({ username, id, avatar }: IUser) {
  console.log("user, locale, avatar", username, avatar);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{username}</Text>
      {avatar && (
        <Image
          source={{
            uri: `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`,
          }}
          style={styles.image}
        />
      )}
    </View>
  );
}
