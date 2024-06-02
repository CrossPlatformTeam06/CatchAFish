import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MainPage from "./screen/MainPage";
import SearchPage from "./screen/SearchPage";
import LoadingPage from "./screen/LoadingPage";
import RecordPage from "./screen/RecordPage";

const Stack = createNativeStackNavigator();

export default function App() {
  //npm install @react-navigation/native
  //npm install @react-navigation/native-stack
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingPage">
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="RecordPage" component={RecordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
