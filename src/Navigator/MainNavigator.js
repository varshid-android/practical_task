import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Dashboard from '../Screen/Dashboard';
import Splash from '../Screen/Splash';
import Cart from '../Screen/Cart';
import Order from '../Screen/Order';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false, animation: 'flip'}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false, animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false, animation: 'fade_from_bottom'}}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={{headerShown: false, animation: 'fade_from_bottom'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
