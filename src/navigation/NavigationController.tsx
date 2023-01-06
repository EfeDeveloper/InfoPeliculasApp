import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import {IMovie} from '../interfaces/movieInterface';

export type RootStackParams = {
  Home: undefined;
  DetailScreen: IMovie;
};

const Stack = createStackNavigator<RootStackParams>();

const NavigationController = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {},
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default NavigationController;
