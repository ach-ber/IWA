import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/connection/SignInScreen';

import i18n from './localization/i18n';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={i18n.t('signin')} component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
