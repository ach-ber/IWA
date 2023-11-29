import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import {AntDesign, Feather} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from "../../assets/colors/Colors";
import {LinearGradient} from "expo-linear-gradient";
import i18n from "../../localization/i18n";

export default function FormuleComponent({ title, description , price,date, backgroundColor, borderColor, onPress,selected,colorGradient }) {
    return (
        <LinearGradient colors={colorGradient} start={[1, 1]} end={[0, 0]} style={[styles.formuleContainer, {borderColor: borderColor }]}>
            <Pressable style={styles.formulePressable} onPress={onPress}>

                <View style={styles.leftContainer}>
                    <Text>
                        {selected && <MaterialCommunityIcons name="circle-slice-8" size={24} color="white" />}
                        {!selected && <MaterialCommunityIcons name="circle-outline" size={24} color="white" />}
                    </Text >

                    <View style={[styles.formuleLogo]}>
                        {title === i18n.t("formula_option.free") &&<Feather name="triangle" size={50} color="white" />}
                        {title === i18n.t("formula_option.silver") &&<Feather name="square" size={50} color="white" />}
                        {title === i18n.t("formula_option.gold") &&<Feather name="hexagon" size={50} color="white" />}
                        {title === i18n.t("formula_option.platinum") &&<Feather name="octagon" size={50} color="white" />}
                    </View>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.formuleTitle}>{title}</Text>
                        <Text style={styles.formuleDate}>{price}</Text>
                    </View>
                    {description[0] && <Text style={styles.formuleLabel}><View style={{paddingRight:10}}><AntDesign name="checkcircle" size={14} color="white" /></View>{description[0]}</Text>}
                    {description[1] && <Text style={styles.formuleLabel}><View style={{paddingRight:10}}><AntDesign name="checkcircle" size={14} color="white" /></View>{description[1]}</Text>}
                    {description[2] && <Text style={styles.formuleLabel}><View style={{paddingRight:10}}><AntDesign name="checkcircle" size={14} color="white" /></View>{description[2]}</Text>}
                    {selected && <Text style={styles.formuleDate}>{date}</Text>}

                </View>
            </Pressable>
        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    formuleContainer: {
        width: "100%",
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        marginVertical: 10,
    },
    formulePressable: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    leftContainer: {
        width: "30%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    formuleLogo: {
        height: 60,
        width: 60,
        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightContainer: {
        width: "70%",
        height: "100%",
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '90%',
    },
    formuleTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'white',
        marginBottom: 5,
    },
    formuleDate: {
        fontSize: 12,
        textAlign: 'left',
        color: '#dadada',
        marginTop: 5,
        //color: 'white',
    },
    formuleLabel: {
        fontSize: 14,
        textAlign: 'left',
        marginTop: 5,
        color: 'white',
    }
});

