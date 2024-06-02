import React, { useState, useEffect } from 'react';
import { Modal, View, Text, StyleSheet, Button, ActivityIndicator, Animated, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { parseString } from 'react-native-xml2js';
// npm install @react-native-async-storage/async-storage 
// npm install react-native-xml2js

export default function FishRecordModal({ visible, fishName, onClose }) {
  const [fishData, setFishData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    if (visible) {
      fetchDataWithCache(fishName, 1);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, fishName]);

  const fetchDataWithCache = async (fishName, pageNo) => {
    setLoading(true);
    setError(null);
    try {
      const cachedData = await AsyncStorage.getItem(`page_${pageNo}`);
      if (cachedData) {
        console.log(`Page ${pageNo} data found in cache`);
        parseAndFilterFishData(cachedData, fishName, pageNo);
      } else {
        fetchFishDataFromAPI(fishName, pageNo);
      }
    } catch (error) {
      console.error('Error accessing cache:', error);
      fetchFishDataFromAPI(fishName, pageNo);
    }
  };

  const fetchFishDataFromAPI = async (fishName, pageNo) => {
    const apiKey = 'JCB%2FHxN7y8XHjxyOjwMEL0xT5hLuQwPqQwNDJnj6s3%2Fmsy52lNkC0mROBZYtDdQJw6u1fEzJUq7brWZdWX59XA%3D%3D';
    const url = `http://apis.data.go.kr/1520635/OceanBiospeciesInfoService/getOceanBiospeciesResult?serviceKey=${apiKey}&numOfRows=20&pageNo=${pageNo}`;

    try {
      const response = await fetch(url, { method: 'GET' });
      if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);

      const text = await response.text();
      await AsyncStorage.setItem(`page_${pageNo}`, text);
      console.log(`Page ${pageNo} data saved to cache`);
      parseAndFilterFishData(text, fishName, pageNo);
    } catch (error) {
      console.error('Error fetching fish data:', error);
      setError(error.toString());
      setLoading(false);
    }
  };

  const parseAndFilterFishData = (xmlData, fishName, pageNo) => {
    parseString(xmlData, (err, result) => {
      if (err) {
        console.error('Error parsing XML:', err);
        setError('Error parsing XML data');
        setLoading(false);
        return;
      }

      const items = result.response.body[0].items[0].item;
      if (!items || items.length === 0) {
        setError('검색 결과가 없습니다.');
        setFishData([]);
        setLoading(false);
        return;
      }

      const filteredItem = items.find(item => 
        item.mfSpeciesKor && item.mfSpeciesKor[0].includes(fishName)
      );

      if (filteredItem) {
        console.log('Filtered Item:', filteredItem); // 필터링된 결과 확인
        const result = {
          color: filteredItem.mfColor ? filteredItem.mfColor[0] : '알려지지 않음',
          form: filteredItem.mfFeature ? filteredItem.mfFeature[0] : '알려지지 않음',
          habitat: filteredItem.mfDistribution ? filteredItem.mfDistribution[0] : '알려지지 않음',
        };

        setFishData([result]);
        AsyncStorage.setItem(fishName, JSON.stringify([result])); // 캐시에 저장
        setError(null);
        setLoading(false); // 로딩 상태 해제
      } else {
        // 다음 페이지로 이동
        fetchDataWithCache(fishName, pageNo + 1);
      }
    });
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.centeredView}>
        <Animated.View style={[styles.modalView, { opacity: fadeAnim }]}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{fishName}</Text>
            {loading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : error ? (
              <Text style={styles.errorText}>{error}</Text>
            ) : (
              fishData.length > 0 ? (
                fishData.map((fish, index) => (
                  <View key={index} style={styles.fishDataContainer}>
                    <Text style={styles.modalText}>색상: {fish.color}</Text>
                    <Text style={styles.modalText}>형태: {fish.form}</Text>
                    <Text style={styles.modalText}>서식지: {fish.habitat}</Text>
                  </View>
                ))
              ) : (
                <Text style={styles.modalText}>검색 결과가 없습니다.</Text>
              )
            )}
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.textStyle}>닫기</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'transparent', // 완전 투명 배경
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalContent: {
      width: '100%',
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 20,
      marginBottom: 10,
      fontWeight: 'bold',
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
    fishDataContainer: {
      marginBottom: 10,
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
      textAlign: "center",
    },
    closeButton: {
      backgroundColor: '#2196F3',
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      marginTop: 10,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });