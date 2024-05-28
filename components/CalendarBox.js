import { View } from "react-native";
import { Calendar } from "react-native-calendars";

export default function CalendarBox() {
  //npm install --save react-native-calendars
  return (
    <View>
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
