import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import Colors from '../../assets/colors/Colors';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FormuleComponent({ title, description , price,date, backgroundColor, borderColor, onPress,selected }) {
    return (
        <View style={[styles.formuleContainer, {borderColor: borderColor }]}>
            <Pressable style={styles.button} onPress={onPress}>

                <View style={styles.leftContainer}>
                    <Text>
                        {selected && <MaterialCommunityIcons name="circle-slice-8" size={24} color="black" />}
                        {!selected && <MaterialCommunityIcons name="circle-outline" size={24} color="black" />}
                    </Text >

                    <View style={[styles.formuleLogo, {backgroundColor: backgroundColor}]}></View>
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.formuleTitle}>{title}</Text>
                        <Text style={styles.formuleDateLabel}>{price}</Text>
                    </View>
                    {description[0] && <Text style={styles.formuleLabel}><AntDesign name="checkcircle" size={14} color="black" />{description[0]}</Text>}
                    {description[1] && <Text style={styles.formuleLabel}><AntDesign name="checkcircle" size={14} color="black" />{description[1]}</Text>}
                    {description[2] && <Text style={styles.formuleLabel}><AntDesign name="checkcircle" size={14} color="black" />{description[2]}</Text>}
                    {selected && <Text style={styles.formuleDateLabel}>Renouvellement le {date}</Text>}

                </View>
            </Pressable>
        </View>
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
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '90%',
    },
    leftContainer: {
        width: "30%",
        height: "100%",
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
    button: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    formuleTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    formuleDateLabel: {
        fontSize: 12,
        textAlign: 'left',
        color: '#a3a3a3',
    },
    formuleLogo: {
        height: 60,
        width: 60,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    formuleLabel: {
        fontSize: 14,
        textAlign: 'left',
        marginTop: 5,
    }
});

