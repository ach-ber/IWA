import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./src/components/bottomTabNavigator/BottomTabNavigator";
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import ConnectionStack from "./src/screens/connection/ConnectionStack";
import {UserProvider} from "./src/context/UserContext";

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
        <UserProvider>
            <NavigationContainer>
                <BottomTabNavigator />
            </NavigationContainer>
        </UserProvider>
    </ApplicationProvider>

  );
};

export default App;

//  <BottomTabNavigator/>