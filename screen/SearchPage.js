import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  Button,
} from "react-native";
import SearchBar from "../components/SearchBar";
import FishList from "../components/FishList";
import { fetchFishData } from "../components/api";

const Search = ({ navigation }) => {
  const [fishData, setFishData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchFishData(query);
      console.log("Fetched Fish Data:", data);
      const sortedData = data.sort((a, b) =>
        a.mfSpeciesKor > b.mfSpeciesKor ? 1 : -1
      ); // 가나다순 정렬
      setFishData(sortedData);
    } catch (error) {
      console.error("Error in handleSearch:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar style={styles.searchBar} onSearch={handleSearch} />
      <View style={styles.homeButton}>
        <Button title="Home" onPress={() => navigation.navigate("MainPage")} />
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FishList
          fishData={fishData}
          onPressItem={(fish) => console.log(fish)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    position: "relative", // 부모 컨테이너 설정
  },
  homeButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1, // 검색 바 위로 레이어 쌓이도록 설정
  },
  searchBar: {
    marginTop: 150, // 검색 바를 아래로 이동
    zIndex: 0, // 검색 바 레이어를 하위로 이동
  },
  buttonText: {
    fontSize: 16,
  },
  errorText: {
    color: "red",
  },
});

export default Search;
