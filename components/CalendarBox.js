import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Calendar } from "react-native-calendars";
import FishIcon from "../assets/fish_icon.png";

export default function CalendarBox() {
  const [markedDates, setMarkedDates] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleDayPress = (day) => {
    console.log("선택된 날", day);
    setMarkedDates((prevMarkedDates) => ({
      ...prevMarkedDates,
      [day.dateString]: { marked: true },
    }));
    setSelectedDate(day.dateString); // 선택된 날짜 설정
    setModalVisible(true); // 모달 표시
  };

  return (
    <View style={{ marginTop: 50 }}>
      <Text style={styles.title}>낚시 출석 도장</Text>
      <Calendar
        current={"2024-06-01"}
        onDayPress={handleDayPress}
        monthFormat={"yyyy MM"}
        markedDates={markedDates}
        renderDay={(day, item) => {
          return item.marked ? (
            <Image source={FishIcon} style={{ width: 30, height: 30 }} />
          ) : (
            <View
              style={{
                width: 30,
                height: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#000" }}>{day ? "" : day.day}</Text>
            </View>
          );
        }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>출석이 완료되었습니다.</Text>
            <Text style={styles.modalText}>날짜: {selectedDate}</Text>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(false);
              }}
            >
              <Text style={styles.textStyle}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "MangoDdobak",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
