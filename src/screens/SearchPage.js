import { View, Text } from "react-native";
import Footer from "../components/Footer";

export default function SearchPage({ navigation }) {
  return (
    <View>
      <Text>검색페이지</Text>
      <Footer navigation={navigation} />
    </View>
  );
}
