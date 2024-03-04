import React from 'react';
import {LogBox} from 'react-native';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import {enableScreens} from 'react-native-screens';

// Screens
import {Home, Details} from './src/screens';

const Stack = createStackNavigator();
LogBox.ignoreAllLogs();
enableScreens();

const Routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      defaultScreenOptions={{gestureEnabled: true}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
