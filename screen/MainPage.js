import { View, Text } from "react-native";
import Footer from "../components/Footer";
import Calendar from "../components/CalendarBox";
import Carousel from "../components/Carousel";

export default function MainPage({ navigation }) {
  return (
    <View>
      <Carousel />
      <Calendar />
      <Footer navigation={navigation} />
    </View>
  );
}

//캘린더 컴포넌트를 표시하여 사용자가 언제 어떤 물고기를 잡았는지 시각적으로 확인할 수 있도록 함
// 활동 요약을 보여주는 컴포넌트(예: 총 포획한 물고기 수, 최근 활동 내역 등)
// 하단바에 페이지 이동을 위한 버튼(메인 페이지, 기록 페이지, 물고기 검색 페이지)

//추가적으로 메인 페이지에 낚시 꿀팁이나 / 낚시 도구 정보 / 제철 물고기 등등의 소개도 있으면 좋을 거 같다

// 봄 (3월-5월)
// 도다리, 놀래미, 쭈꾸미, 키조개, 소라, 참다랑어, 장어, 멍게

//  여름 (6월-8월)
// 오징어, 농어, 전갱이, 갈치, 참다랑어

// 가을 (9월-11월)
// 전어, 광어, 게, 감성돔, 전복, 굴, 대하, 오징어

// 겨울 (12월-2월)
// 도루묵, 삼치, 명태, 도미, 꽁치, 굴

//전설의 낚시꾼에 도전해보자!
