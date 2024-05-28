import { Button, View } from "react-native";

export default function Footer({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
      }}
    >
      <Button
        title="MainPage"
        onPress={() => navigation.navigate("MainPage")}
      />
      <Button
        title="SearchPage"
        onPress={() => navigation.navigate("SearchPage")}
      />
    </View>
  );
}
