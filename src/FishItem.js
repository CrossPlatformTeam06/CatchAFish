import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FishItem = ({ fish, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(fish)} style={styles.container}>
      <View>
        <Text style={styles.name}>{fish.mfSpeciesKor}</Text>
        <Text>{fish.mfColor}</Text>
        <Text>{fish.mfDistribution}</Text>
        <Text>{fish.mfFeature}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default FishItem;
