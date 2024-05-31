import React, { useMemo } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Text,
} from "react-native";
import Fishing from "../../assets/fishing.jpg";

const windowWidth = Dimensions.get("window").width;
const margin = 12;

const cardSize = { width: windowWidth - 24 * 2.5, height: 250 };

export default function Carousel() {
  const data = useMemo(
    () => [
      { mainImageUrl: Fishing },
      { mainImageUrl: Fishing },
      { mainImageUrl: Fishing },
    ],
    []
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>저번 달 낚시 왕</Text>
      <FlatList
        data={data}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 24 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ marginRight: margin }}>
            <ImageBackground style={cardSize} source={item.mainImageUrl} />
          </TouchableOpacity>
        )}
        keyExtractor={(_, index) => String(index)}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    backgroundColor: "#fff",
    paddingTop: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});
