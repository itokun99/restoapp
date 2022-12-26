import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../../presentation/screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const defaultScreenOption = {headerShown: false};

const RootRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultScreenOption}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;
