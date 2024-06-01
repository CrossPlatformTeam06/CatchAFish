import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoadingPage() {
  const [loadingCompleted, setLoadingCompleted] = useState(false);
  const fadeAnim = useState(new Animated.Value(0))[0];
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingCompleted(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 5000); // 5초 후 로딩 완료

    return () => clearTimeout(timer);
  }, [fadeAnim]);

  const handleLoadingComplete = () => {
    navigation.navigate('MainPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.appTitle}>낚시 기록 어플</Text>
        <Text style={styles.subTextTitle}>잡은 물고기 기록, 검색 기능을 한번에!</Text>
      </View>
      <View style={styles.middleContainer}>
        <Image source={require('../../assets/Loading_Fishing.png')} style={styles.iconImage} />
      </View>
      <View style={styles.bottomContainer}>
        {!loadingCompleted ? (
          <View style={styles.loadingContent}>
            <Text style={styles.text}>앱 로딩중...</Text>
          </View>
        ) : (
          <Animated.View style={[styles.loadingContent, { opacity: fadeAnim }]}>
            <Text style={styles.text}>로딩이 완료되었습니다</Text>
            <TouchableOpacity style={styles.button} onPress={handleLoadingComplete}>
              <Text style={styles.buttonText}>계속</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    flex: 0.8,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1.2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  subTextTitle: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center',
  },
  iconImage: {
    width: 100,
    height: 100,
  },
  loadingContent: {
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
  checkIcon: {
    fontSize: 30,
    color: 'green',
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
