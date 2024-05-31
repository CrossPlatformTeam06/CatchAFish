import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingPage from '../screens/LoadingPage';
import MainPage from '../screens/MainPage';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
        <Stack.Screen name="MainPage" component={MainPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
