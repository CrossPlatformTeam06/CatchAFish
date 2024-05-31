import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react"; // useState 추가
import Footer from "../components/Footer";
import Calendar from "../components/CalendarBox";
import Carousel from "../components/Carousel";
import MainContents from "../components/MainContents";
import * as Font from "expo-font";

export default function MainPage({ navigation }) {
  // useState를 사용하여 isReady 상태 값 초기화
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        MangoDdobak: require("../assets/fonts/MangoDdobak-B(ttf).ttf"),
      });
      setIsReady(true);
    }

    loadFonts(); // async 함수를 따로 정의하고 호출
  }, []); // 빈 배열을 useEffect의 두 번째 매개변수로 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Carousel />
      <MainContents />
      <Calendar />
      <Footer navigation={navigation} />
    </ScrollView>
  );
}

//캘린더 컴포넌트를 표시하여 사용자가 언제 어떤 물고기를 잡았는지 시각적으로 확인할 수 있도록 함
// 활동 요약을 보여주는 컴포넌트(예: 총 포획한 물고기 수, 최근 활동 내역 등)
// 하단바에 페이지 이동을 위한 버튼(메인 페이지, 기록 페이지, 물고기 검색 페이지)

//전설의 낚시꾼에 도전해보자!
