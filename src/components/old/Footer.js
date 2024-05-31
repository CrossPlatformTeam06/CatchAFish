import React from 'react';
import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();

  return (
    <View>
      <Button title="메인 페이지" onPress={() => navigation.navigate('MainPage')} />
      <Button title="기록 페이지" onPress={() => navigation.navigate('RecordPage')} />
      <Button title="검색 페이지" onPress={() => {}} />
    </View>
  );
}
