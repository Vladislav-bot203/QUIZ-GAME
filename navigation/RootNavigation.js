import React from 'react';
import MenuScreen from '../screens/menuScreen';
import Questions from '../screens/questionsScreen';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import UsersScore from '../screens/UsersScoreScreen';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator 
        screenOptions={{headerShown: false, statusBarHidden: true, navigationBarHidden: true}}>
        <Stack.Screen name="Menu" component={MenuScreen}/>
        <Stack.Screen name="Questions" component={Questions}/>
        <Stack.Screen name="UsersScore" component={UsersScore}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
