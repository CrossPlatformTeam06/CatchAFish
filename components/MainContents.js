import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import MainFishInfo01 from "../assets/MainFishInfo01.png";

export default function MainContents() {
  return (
    <View style={{ marginTop: 50 }}>
      <MainFishInfo />
    </View>
  );
}

function MainFishInfo() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image source={MainFishInfo01} style={{ width: "100%", height: 100 }} />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>도미</Text>
            <Text style={styles.modalText}>출현 시기: 1년 내내</Text>
            <Text style={styles.modalText}>출현 장소: 바다</Text>
            <Text style={styles.modalText}>크기: 30-60cm</Text>
            <Text style={styles.modalText}>
              낚시 꿀팁: 미끼로 새우나 조개를 사용하면 효과적 / 바닥층을
              공략하는 것이 좋다.
            </Text>
            <Text style={styles.modalText}>
              특징: 몸이 타원형이고 옆으로 납작하며 입이 크고 날카로운 이빨을
              가지고 있다.
            </Text>
            <Text style={styles.modalText}>
              컬러: 은백색에서 붉은색까지 다양
            </Text>
            <Button
              title="닫기"
              onPress={() => setModalVisible(!modalVisible)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
