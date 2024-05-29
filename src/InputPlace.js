import {View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { useState } from 'react';


export default function InputPlace(){
    const [place, setPlace] = useState(null);

    return ( <View style={styles.container}>
        <Text style = {styles.text} >장소 : </Text>
        <TextInput style={styles.textInput}  
            value={place} 
            onChangeText={(place)=>setPlace(place)}
            placeholder='장소'></TextInput>
    </View>)
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'flow',
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