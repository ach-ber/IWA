import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function ButtonShared({ label, onPress, color, backgroundColor, borderColor }) {
    return (
        <View style={[styles.buttonContainer, { backgroundColor: backgroundColor, borderColor: borderColor }]}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={[styles.buttonLabel, { color: color }]}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
    },
    button: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    buttonLabel: {
        fontSize: 18,
        fontWeight: 500,
        width: '100%',
        textAlign: 'center',
    },
});
