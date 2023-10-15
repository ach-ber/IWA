import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function AddButton({onPress, backgroundColor, color}) {
    return (
        <Pressable style={[styles.button,{backgroundColor: backgroundColor}]} onPress={onPress}>
            <IconAwesome5 name="plus" size={20} color={color} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        position: 'absolute',
        top: 20,
        left: '80%',
        zIndex: 100,
    },
});
