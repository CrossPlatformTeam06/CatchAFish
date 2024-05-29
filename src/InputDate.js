import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal'

export default function InputDate(){
    const [selectedDate, setSelectedDate] = useState("0000-00-00");
    const [showCalendar, setShowCalendar] = useState(false);

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
        setShowCalendar(false);
    };

    const openCalendar = () => {
        setShowCalendar(true);
    }

    return(<View style={styles.container}>
        <Text style={styles.text}>날짜 : </Text>
        <Text style={styles.textInput}>{selectedDate}</Text>
        <Button title="선택" onPress={openCalendar}/>
        <Modal
            transparent = {true}
            isVisible={showCalendar}
            onRequestClose={() => {
                setShowCalendar(false); }}
        >
                <View style={styles.modalContainer}>
                    <Calendar onDayPress = {onDayPress}/>
                </View>
        </Modal>
    </View>)
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      justifyContent: 'flow',
      alignItems: 'center',
      flexDirection : 'row',
      margin : 20,
    },
    text: {
      fontSize: 20,
      //marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textInput: {
        width : 130,
        fontSize: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
  });