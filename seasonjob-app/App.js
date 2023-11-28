import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./src/components/bottomTabNavigator/BottomTabNavigator";
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import ConnectionStack from "./src/screens/connection/ConnectionStack";
import {UserContext, UserProvider} from "./src/context/UserContext";
import NavigationStack from "./src/shared/NavigationStack";


const App = () => {

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
        <UserProvider>
            <NavigationContainer>
                <NavigationStack/>
            </NavigationContainer>
        </UserProvider>
    </ApplicationProvider>

  );
};

export default App;
