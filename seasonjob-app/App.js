import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/connection/SignInScreen';
import AccountScreen from "./src/screens/account/AccountScreen";
import SignUpScreen from "./src/screens/connection/SignUpScreen";
import FormuleScreen from "./src/screens/account/FormuleScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Formule" component={FormuleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
