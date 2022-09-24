import { View } from "react-native";
import { useRef, useEffect } from "react";
import { Background } from "./src/components/Background";
import { StatusBar } from "react-native";
import { Subscription } from "expo-modules-core";
import * as Notifications from "expo-notifications";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { Home } from "./src/screens/Home";
import { Routes } from "./src/routes";
import Loading from "./src/components/Loading";
import "./src/service/notificationConfigs";
import { getPushNotificationToken } from "./src/service/getPushNotificationToken";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(() => {
    const token = getPushNotificationToken();
  });

  useEffect(() => {
    getNotificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log("notificaçao", notification);
      });
    responseNotificationListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log("response ", response);
      });
    return () => {
      if (
        getNotificationListener.current &&
        responseNotificationListener.current
      ) {
        Notifications.removeNotificationSubscription(
          getNotificationListener.current
        );
        Notifications.removeNotificationSubscription(
          responseNotificationListener.current
        );
      }
    };
  }, []);

  return (
    <Background>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}
