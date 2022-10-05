import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";

import { styles } from "./styles";
import { IUser } from "../../screens/Home";

export function WelcomeCard({ username, locale, avatar }: IUser) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{username}</Text>
      <Text style={styles.name}>{locale}</Text>
      {avatar && <Image source={avatar as ImageSourcePropType} />}
    </View>
  );
}
