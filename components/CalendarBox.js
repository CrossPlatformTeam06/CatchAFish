import { View, Text } from "react-native";
import { Calendar } from "react-native-calendars";
import FishIcon from "../assets/fish_icon.png";
import { useState } from "react";

export default function CalendarBox() {
  //npm install --save react-native-calendars

  const [markedDates, setMarkedDates] = useState({});

  const handleDayPress = (day) => {
    console.log("선택된 날", day);
    setMarkedDates((prevMarkedDates) => ({
      ...prevMarkedDates,
      [day.dateString]: { marked: true },
    }));
  };

  return (
    <View style={{ marginTop: 50 }}>
      <Text style={{ textAlign: "center" }}>낚시 출석 도장</Text>
      <Calendar
        current={"2024-06-01"}
        onDayPress={handleDayPress}
        monthFormat={"yyyy MM"}
        markedDates={markedDates}
        renderDay={(day, item) => {
          return item.marked ? (
            <Image source={FishIcon} style={{ width: 30, height: 30 }} />
          ) : (
            <Text>{day ? day.day : ""}</Text>
          );
        }}
      />
    </View>
  );
}
