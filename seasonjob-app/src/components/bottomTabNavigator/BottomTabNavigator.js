import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from "../../screens/connection/SignInScreen";
import AccountStack from "../../screens/account/AccountStack";
import Icon from 'react-native-vector-icons/FontAwesome5';
import i18n from "../../localization/i18n";

const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
    return (
        <Tab.Navigator  screenOptions={{tabBarStyle: { position: 'absolute' },tabBarActiveTintColor: '#e91e63'}}>
            <Tab.Screen
                name={i18n.t("home")}
                component={SignInScreen}
                options={{
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen
                name={i18n.t("offers")}
                component={AccountStack}
                options={{
                    tabBarLabel: 'Offres',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="inbox" size={size} color={color} />
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen
                name={i18n.t("reviews")}
                component={AccountStack}
                options={{
                    tabBarLabel: 'Avis',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="pencil-alt" size={size} color={color} />
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen
                name={i18n.t("chat")}
                component={AccountStack}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="comment-alt" size={size} color={color} />
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen
                name={i18n.t("account")}
                component={AccountStack}
                options={{
                    tabBarLabel: 'Compte',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" size={size} color={color} />
                    ),
                    headerShown:false
                }}
            />

        </Tab.Navigator>
    );
}

