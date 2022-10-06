import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: THEME.COLORS.SHAPE,
    borderRadius: 8,
    padding: 50,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
  },
  image: {
    height: 100,
    width: 100,
  },
});
