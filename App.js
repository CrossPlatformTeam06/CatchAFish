// App.js

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import SearchBar from './src/SearchBar';
import FishList from './src/FishList';
import { fetchFishData } from './src/api';

const App = () => {
  const [fishData, setFishData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (query) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchFishData(query);
      setFishData(data);
    } catch (error) {
      setError('Error fetching fish data');
      console.error('Error fetching fish data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (query) => {
    if (query) {
      fetchData(query);
    } else {
      setFishData([]);
    }
  };

  const handleHomePress = () => {
    fetchData(); // 홈 버튼 누를 때 초기 데이터 다시 불러오기
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.homeButton} onPress={handleHomePress}>Home</Text>
      </View>
      <SearchBar onSearch={handleSearch} />
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FishList fishData={fishData} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    marginBottom: 20,
  },
  homeButton: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default App;
