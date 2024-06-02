import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FishItem = ({ fish, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(fish)} style={styles.container}>
      <View>
        <Text style={styles.name}>{fish.mfSpeciesKor}</Text>
        <Text><Text style={styles.bold}>서식지:</Text> {fish.mfDistribution}</Text>
        <Text><Text style={styles.bold}>특징:</Text> {fish.mfFeature}</Text>
        <Text><Text style={styles.bold}>색상:</Text> {fish.mfColor}</Text>
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
  bold: {
    fontWeight: 'bold',
  },
});

export default FishItem;
