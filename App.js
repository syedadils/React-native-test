import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';


const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>

            <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen name="Home" component={SplashScreen} />
            <Stack.Screen name="books" component={HomeScreen} />


            </Stack.Navigator>

    </NavigationContainer>

  );
};

export default App

