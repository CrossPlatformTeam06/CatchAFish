import { View, Text } from "react-native";
import { Calendar } from "react-native-calendars";

export default function CalendarBox() {
  //npm install --save react-native-calendars
  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ textAlign: "center" }}>낚시 출석 도장</Text>
      <Calendar
        current={"2024-06-01"} //초기 설정
        //날짜를 클릭 했을 때 반환 값
        onDayPress={(day) => {
          console.log("선택된 날", day);
        }}
        //월 형식 표시 여부
        monthFormat={"yyyy MM"}
      />
    </View>
  );
}
