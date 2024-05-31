import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingPage from '../screens/LoadingPage';
import MainPage from '../screens/MainPage';
import SearchPage from '../screens/SearchPage';
import RecordPage from '../screens/RecordPage';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoadingPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoadingPage" component={LoadingPage} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="RecordPage" component={RecordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
