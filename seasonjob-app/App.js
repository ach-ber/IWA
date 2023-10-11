import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./src/components/bottomTabNavigator/BottomTabNavigator";
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from "@ui-kitten/components";
const App = () => {
  return (
      <ApplicationProvider {...eva} theme={eva.light} >
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </ApplicationProvider>
  );
};

export default App;
