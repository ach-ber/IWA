import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function FormuleAccountComponent({ label, color, backgroundColor, borderColor,date, onPress }) {

    return (
        <View style={[styles.formuleContainer, {borderColor: borderColor }]}>
            <Pressable style={styles.formulePressable} onPress={onPress}>
                <View style={[styles.formuleLogo, {backgroundColor: backgroundColor}]}></View>
                <View style={{flexDirection: 'column'}}>
                    <Text style={[styles.formuleLabel, { color: color }]}>{label}</Text>
                    <Text style={styles.formuleDate}>Renouvellement le {date}</Text>
                </View>
            </Pressable>
        </View>
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
        color: '#a3a3a3',
    },
    formuleLogo: {
        height: 60,
        width: 60,
        marginHorizontal: 20,
        borderRadius: 10,
    }
});
