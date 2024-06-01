import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InputDate from '../components/InputDate';
import InputPlace from '../components/InputPlace';
import InputFish from '../components/InputFish';
import FishRecordModal from '../components/FishRecordModal';

const data = [{
    place: '서해안 바다',
    date: '2024-06-01',
    fishes: [{ fishName: '청새치', fishLength: '150cm'}]
}];

export default function RecordPage({ navigation }) {
    const [fishes, setFishes] = useState([{ fishName: '', fishLength: '', key: Date.now().toString() }]);
    const [selectedDate, setSelectedDate] = useState("0000-00-00");
    const [place, setPlace] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [errors, setErrors] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedFish, setSelectedFish] = useState(null);

    const addFish = () => {
        setFishes([...fishes, { fishName: '', fishLength: '', key: Date.now().toString() }]);
        setErrors([...errors, null]);
    }

    const removeFish = (index) => {
        const updatedFishes = [...fishes];
        updatedFishes.splice(index, 1);
        setFishes(updatedFishes);

        const updatedErrors = [...errors];
        updatedErrors.splice(index, 1);
        setErrors(updatedErrors);
    }

    const saveData = () => {
        if (errors.some(error => error !== null)) {
            alert('입력값에 오류가 있습니다. 모든 오류를 해결한 후 다시 시도하세요.');
            return;
        }

        const newData = {
            place,
            date: selectedDate,
            fishes
        };
        data.push(newData);
        setFishes([]);
        setPlace('');
        setSelectedDate("0000-00-00");
        setShowForm(false);
    }

    const openModal = (fishName) => {
        console.log(`Selected fish name: ${fishName}`);  // 데이터 전달 확인
        setSelectedFish(fishName);
        setModalVisible(true);
    }

    const renderFishItem = ({ item }) => (
        <View style={styles.listItem}>
            <Text>{item.place} - {item.date}</Text>
            {item.fishes.map(fish => (
                <TouchableOpacity key={fish.key} onPress={() => openModal(fish.fishName)}>
                    <Text>{fish.fishName} ({fish.fishLength})</Text>
                </TouchableOpacity>
            ))}
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>기록 페이지</Text>
                <Button title="기록 추가" onPress={() => setShowForm(true)} />
            </View>
            {showForm ? (
                <View style={styles.formContainer}>
                    <InputDate selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                    <InputPlace place={place} setPlace={setPlace} />
                    <InputFish fishes={fishes} setFishes={setFishes} addFish={addFish} removeFish={removeFish} />
                    <View style={styles.buttonContainer}>
                        <Button title="저장" onPress={saveData} />
                        <Button title="닫기" onPress={() => setShowForm(false)} />
                    </View>
                </View>
            ) : (
                <FlatList
                    data={data}
                    renderItem={renderFishItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            )}
            <StatusBar style='auto' />
            <View style={styles.footer}>
                <Button title="메인 페이지로 돌아가기" onPress={() => navigation.navigate('MainPage')} />
            </View>
            <FishRecordModal
                visible={modalVisible}
                fishName={selectedFish}
                onClose={() => setModalVisible(false)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    headerText: {
        fontSize: 20,
    },
    listItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    formContainer: {
        padding: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    footer: {
        padding: 20,
    }
});
