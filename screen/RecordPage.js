import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import InputDate from "../components/InputDate";
import InputPlace from "../components/InputPlace";
import InputFish from "../components/InputFish";
import FishRecordModal from "../components/FishRecordModal";
import Footer from "../components/Footer";

const data = [
  {
    place: "남해안 바다",
    date: "2024-06-01",
    fishes: [{ fishName: "청새치", fishLength: "150cm" }],
  },
];

export default function RecordPage({ navigation }) {
  const [fishes, setFishes] = useState([
    { fishName: "", fishLength: "", key: Date.now().toString() },
  ]);
  const [selectedDate, setSelectedDate] = useState("0000-00-00");
  const [place, setPlace] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFish, setSelectedFish] = useState(null);
  const [recordData, setRecordData] = useState(data); // Record data state

  const addFish = () => {
    setFishes([
      ...fishes,
      { fishName: "", fishLength: "", key: Date.now().toString() },
    ]);
    setErrors([...errors, null]);
  };

  const removeFish = (index) => {
    const updatedFishes = [...fishes];
    updatedFishes.splice(index, 1);
    setFishes(updatedFishes);

    const updatedErrors = [...errors];
    updatedErrors.splice(index, 1);
    setErrors(updatedErrors);
  };

  const saveData = () => {
    if (errors.some((error) => error !== null)) {
      alert("입력값에 오류가 있습니다. 모든 오류를 해결한 후 다시 시도하세요.");
      return;
    }

    const newData = {
      place,
      date: selectedDate,
      fishes,
    };
    setRecordData([...recordData, newData]); // Update record data state
    setFishes([]);
    setPlace("");
    setSelectedDate("0000-00-00");
    setShowForm(false);
  };

  const deleteRecord = (index) => {
    const updatedRecordData = [...recordData];
    updatedRecordData.splice(index, 1);
    setRecordData(updatedRecordData);
  };

  const openModal = (fishName) => {
    console.log(`Selected fish name: ${fishName}`); // 데이터 전달 확인
    setSelectedFish(fishName);
    setModalVisible(true);
  };

  const renderFishItem = ({ item, index }) => (
    <View style={styles.listItem}>
      <View style={styles.recordInfo}>
        <Text>
          {item.place} - {item.date}
        </Text>
        {item.fishes.map((fish) => (
          <TouchableOpacity
            key={fish.key}
            onPress={() => openModal(fish.fishName)}
          >
            <Text>
              {fish.fishName} ({fish.fishLength})
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => deleteRecord(index)}
        style={styles.deleteButton}
      >
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
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
          <InputDate
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <InputPlace place={place} setPlace={setPlace} />
          <InputFish
            fishes={fishes}
            setFishes={setFishes}
            addFish={addFish}
            removeFish={removeFish}
          />
          <View style={styles.buttonContainer}>
            <Button title="저장" onPress={saveData} />
            <Button title="닫기" onPress={() => setShowForm(false)} />
          </View>
        </View>
      ) : (
        <FlatList
          data={recordData}
          renderItem={renderFishItem}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <StatusBar style="auto" />
      <FishRecordModal
        visible={modalVisible}
        fishName={selectedFish}
        onClose={() => setModalVisible(false)}
      />
      <Footer navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  headerText: {
    fontSize: 20,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  recordInfo: {
    flex: 1,
  },
  formContainer: {
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  footer: {
    padding: 20,
  },
  deleteButton: {
    width: 30, // 정사각형 크기
    height: 30, // 정사각형 크기
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
