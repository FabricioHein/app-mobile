import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import Login from '../pages/screen/login';
import Doc from '../pages/modules/documents';

const Stack = createNativeStackNavigator();



function Rota() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home - Contsys" component={Home} />
      <Stack.Screen name="Imposto" component={Doc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Rota;