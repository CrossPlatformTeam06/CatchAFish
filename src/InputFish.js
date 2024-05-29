import React, { useState, useContext } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import Record from './Record';

const InputFish = () =>{
  const {count, fishes, fishName, fishLength} = useContext(fishContext);

  const [inputVal, setInputVal] = useState('');

  const handleAddFish = () =>{
    addFish({ name: fishName, length: fishLength });
    setInputValue('');
  }
  
  return(
    <>
      <View style={{flexDirection: 'row'}}>
        <Button style={{padding:10}} title="추가" onPress={handleAddFish}/>
        <Button style={{padding:100}} title="삭제" onPress={removeFish}/>
      </View>
      {fishes.map((fish)=>(
        <View key={count}>
          <View style={styles.container}>
            <Text style={styles.text}>종류 : </Text>
            <TextInput style = {styles.textInput} placeholder='종류'
            onChangeText={(text)=>{setFishName(text)}}></TextInput>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>길이 : </Text>
            <TextInput style={styles.textInput}  placeholder='길이' onChangeText={(text)=>setFishLength(text)}></TextInput>
          </View>
        </View>
      ))}
    </>
  )

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection : 'row',
    margin : 20,
  },
  text: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
      width : 250,
      fontSize: 20,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
  }
});

export default InputFish;