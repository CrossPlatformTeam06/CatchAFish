import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FishItem from './FishItem';

const FishList = ({ fishData, onPressItem }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={fishData}
        renderItem={({ item }) => <FishItem fish={item} onPress={() => onPressItem(item)} />}
        keyExtractor={(item) => item.mfSpeciesKor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FishList;
