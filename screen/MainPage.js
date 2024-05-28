import { View, Text } from "react-native";
import Footer from "../components/Footer";
import Calendar from "../components/CalendarBox";

export default function MainPage() {
  return (
    <View>
      <Text>메인페이지</Text>
      <Calendar />
      <Footer />
    </View>
  );
}

//캘린더 컴포넌트를 표시하여 사용자가 언제 어떤 물고기를 잡았는지 시각적으로 확인할 수 있도록 함
// 활동 요약을 보여주는 컴포넌트(예: 총 포획한 물고기 수, 최근 활동 내역 등)
// 하단바에 페이지 이동을 위한 버튼(메인 페이지, 기록 페이지, 물고기 검색 페이지)
