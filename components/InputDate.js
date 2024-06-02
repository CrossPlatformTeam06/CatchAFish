import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Modal from 'react-native-modal';

export default function InputDate({ selectedDate, setSelectedDate }) {
    const [showCalendar, setShowCalendar] = useState(false);

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
        setShowCalendar(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>날짜 : </Text>
            <Text style={styles.textInput}>{selectedDate}</Text>
            <Button title="선택" onPress={() => setShowCalendar(true)} />
            <Modal
                transparent={true}
                isVisible={showCalendar}
                onRequestClose={() => {
                    setShowCalendar(false);
                }}
            >
                <View style={styles.modalContainer}>
                    <Calendar onDayPress={onDayPress} />
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    text: {
        fontSize: 20,
    },
    textInput: {
        width: 130,
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginRight: 10,
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
    },
});
