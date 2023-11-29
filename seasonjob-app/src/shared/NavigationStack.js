import React, {useContext} from "react";
import {UserContext} from "../context/UserContext";
import BottomTabNavigator from "../components/bottomTabNavigator/BottomTabNavigator";
import ConnectionStack from "../screens/connection/ConnectionStack";

const NavigationStack = () => {

    const [user,setUser] = useContext(UserContext);

    return (
        user.login===false ? <ConnectionStack /> : <BottomTabNavigator />
    );

    //return  <ConnectionStack />;

};

export default NavigationStack;