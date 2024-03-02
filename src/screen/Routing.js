import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import BottomNav from '../components/BottomNav';

const Stack = createNativeStackNavigator();
export default function Routing() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={BottomNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
