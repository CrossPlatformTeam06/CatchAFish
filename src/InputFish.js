import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const InputFish = ({fishes, setFishes, addFish, removeFish}) =>{


  const setFishName = (index, text) => {
    const updatedFishes = [...fishes];
    updatedFishes[index].fishName = text;
    setFishes(updatedFishes);
  }

  const setFishLength = (index, text) => {
    const updatedFishes = [...fishes];
    updatedFishes[index].fishLength = text;
    setFishes(updatedFishes);
  }

  return(
    <>
      <View style={{flexDirection: 'row'}}>
        <Button style={{padding:10}} title="추가" onPress={addFish}/>
        <Button style={{padding:100}} title="삭제" onPress={(index)=> removeFish(index)}/>
      </View>
      {fishes && fishes.map((fish, index)=>(
        <View key={index}>
          <View style={styles.container}>
            <Text style={styles.text}>종류 : </Text>
            <TextInput style = {styles.textInput} placeholder='종류' value = {fishes.fishName}
            onChangeText={(text)=>{setFishName(index, text)}}></TextInput>
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>길이 : </Text>
            <TextInput style={styles.textInput}  placeholder='길이' value = {fishes.fishLength}
            onChangeText={(text)=>setFishLength(index, text)}></TextInput>
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
