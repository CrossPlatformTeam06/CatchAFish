import { StyleSheet, View} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import InputDate from "./InputDate";
import InputPlace from './InputPlace';
import InputFish from './InputFish';

import { useState } from 'react';


export default function Record(){

   const [fishes, setFishes] = useState([]);
   const [selectedDate, setSelectedDate] = useState("0000-00-00");

    const  addFish = () => {
        setFishes([...fishes, { fishName: '', fishLength: '', key: Date.now() }]);
    }
  
    const removeFish = (index) => {
        const updatedFishes = [...fishes];
        updatedFishes.splice(index, 1);
        setFishes(updatedFishes);
    }


    return(<>
        <View style={{height: 50}}/>
        <InputDate/>
        <InputPlace selectedDate={selectedDate} setSelectedDate={selectedDate}/>
        <InputFish fishes={fishes} setFishes={setFishes} addFish={addFish} removeFish={removeFish}/>
        <StatusBar style='auto'/>
    </>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flow',
        alignItems: 'center',
        flexDirection : 'row',
        margin : 20,
      }
})

