import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CandidateStack from '../../screens/candidate/CandidateStack';
import AccountStack from "../../screens/account/AccountStack";
import AvisStack from "../../screens/avis/AvisStack";
import EstablishmentStack from "../../screens/establishment/EstablishmentStack";
import Icon from 'react-native-vector-icons/FontAwesome5';
import i18n from "../../localization/i18n";
import OfferStack from '../../screens/offer/OfferStack'

import Colors from '../../assets/colors/Colors';
import ChatStack from '../../screens/chat/ChatStack';

const Tab = createBottomTabNavigator();
export default function BottomTabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ tabBarStyle: { position: 'absolute' }, tabBarActiveTintColor: Colors.green.color }}>
            <Tab.Screen
                name={i18n.t("home")}
                component={CandidateStack}
                options={{
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name={i18n.t("offers")}
                component={OfferStack}
                options={{
                    tabBarLabel: 'Offres',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="inbox" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name={i18n.t("reviews")}
                component={AvisStack}
                // component={AccountStack}
                options={{
                    tabBarLabel: 'Avis',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="pencil-alt" size={size} color={color} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                name={i18n.t("chat")}
                // component={EstablishmentStack}
                component={ChatStack}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="comment-alt" size={size} color={color} />
                    ),
                    headerShown: false
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
                    headerShown: false
                }}
            />

        </Tab.Navigator>
    );
}

