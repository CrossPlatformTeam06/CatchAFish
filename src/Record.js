import { StyleSheet, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import InputDate from "./InputDate";
import InputPlace from './InputPlace';
import InputFish from './InputFish';

import { useState } from 'react';


var data = [{
    place: '',
    date: '',
    fishes: [],
}]

export default function Record(){

    const [fishes, setFishes] = useState([{fishName:'', fishLength: '', key:Date.now()}]);
    const [selectedDate, setSelectedDate] = useState("0000-00-00");
    const [place, setPlace] = useState('');

    let count = 0;

    const  addFish = () => {
        setFishes([...fishes, { fishName: '', fishLength: '', key: Date.now() }]);
    }
  
    const removeFish = (index) => {
        const updatedFishes = [...fishes];
        updatedFishes.splice(index, 1);
        setFishes(updatedFishes);
    }

    const saveData = () =>{
        data[count].place = place;
        data[count].date = selectedDate;
        data[count].fishes = fishes;
        count = count+1;
        
        //setData({place, selectedDate, fishes, key});

        setFishes([]);
        setPlace('');
        setSelectedDate("0000-00-00");
    }

    return(<>
        <View style={{height: 50}}/>
        <Button title="저장" onPress={saveData}/>
        <InputDate selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <InputPlace place={place} setPlace={setPlace}/>
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

