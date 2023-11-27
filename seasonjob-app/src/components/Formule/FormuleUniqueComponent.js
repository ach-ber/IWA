import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import i18n from "../../localization/i18n";
import {LinearGradient} from "expo-linear-gradient";
import Colors from "../../assets/colors/Colors";
import {Feather} from "@expo/vector-icons";

export default function FormuleUniqueComponent({ subscription, color, backgroundColor, borderColor, date, onPress }) {

    const [label, setLabel] = useState('');
    const [endDate, setendDate] = useState('');
    useEffect(() => {
        if (subscription === 'ROLE_FREE') {
            setLabel(i18n.t("formula_option.free"))
        }
        else if (subscription === 'ROLE_SILVER') {
            setLabel(i18n.t("formula_option.silver"))
        }
        else if (subscription === 'ROLE_GOLD') {
            setLabel(i18n.t("formula_option.gold"))
        }
        else if (subscription === 'ROLE_PLATINUM') {
            setLabel(i18n.t("formula_option.platinum"))
        }
        else if (subscription === 'ROLE_ADMIN') {
            setLabel(i18n.t("formula_option.free"))
        }
    });

    useEffect(() => {
        if (subscription === 'ROLE_FREE' || subscription === 'ROLE_ADMIN') {
            setendDate('Aucun prélevement')
        }
        else {
            setendDate(date)
        }
    });

    return (
        <LinearGradient colors={subscription=='ROLE_FREE' ? ['#4c669f', '#3b5998', Colors.darkGrey.color]:
            subscription=='ROLE_SILVER' ? ['#b7b7b7', '#616f8d', Colors.darkGrey.color]:
            subscription=='ROLE_GOLD' ? ['#e8cb6a', '#9a8848', Colors.darkGrey.color]:
            subscription=='ROLE_PLATINUM' ? ['#1e9f00', '#0e7000', Colors.darkGrey.color]:
                ['#4c669f', '#3b5998', Colors.darkGrey.color]

        } start={[1, 1]} end={[0, 0]} style={[styles.formuleContainer, {borderColor: borderColor }]}>
            <Pressable style={styles.formulePressable} onPress={onPress} >
                <View style={[styles.formuleLogo]}>
                    {subscription === 'ROLE_FREE' &&<Feather name="triangle" size={50} color="white" />}
                    {subscription === 'ROLE_SILVER' &&<Feather name="square" size={50} color="white" />}
                    {subscription === 'ROLE_GOLD' &&<Feather name="hexagon" size={50} color="white" />}
                    {subscription === 'ROLE_PLATINUM' &&<Feather name="octagon" size={50} color="white" />}
                </View>
                <View style={{flexDirection: 'column'}}>
                    <Text style={[styles.formuleLabel, { color: 'white' }]}>{label}</Text>
                    <Text style={styles.formuleDate}>{endDate}</Text>
                </View>
            </Pressable>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    formuleContainer: {
        width: "100%",
        height: 100,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,

    },
    formulePressable: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    formuleLabel: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    formuleDate: {
        fontSize: 12,
        textAlign: 'left',
        color: 'white',
    },
    formuleLogo: {
        height: 60,
        width: 60,
        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
