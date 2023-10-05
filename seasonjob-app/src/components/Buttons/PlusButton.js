import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import Colors from "../../assets/colors/Colors";

const PlusButton = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: Colors.lightBlue.color,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 30,
        color: "white",
        textAlign: "center",
    },
});

export default PlusButton;
