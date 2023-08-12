import React from 'react';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>

            <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen name="Home" component={SplashScreen} />

            </Stack.Navigator>

    </NavigationContainer>

  );
};

export default App


