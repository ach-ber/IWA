import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

import i18n from '../../localization/i18n';
import Colors from "../../assets/colors/Colors";

const EstablishmentItemAdd = ({ onPress, name, address, selected }) => {
    return (
        <TouchableOpacity style={styles.establishment} onPress={onPress}>
            <View style={[styles.infoContainer,selected?{borderWidth:1,borderColor:Colors.darkGrey.color}:
                {borderWidth: 1,borderColor: '#eaeaea'}]}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    establishment: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderRadius: 4,
        backgroundColor: '#eaeaea',
        color: "#1C1F1E",
    },
    infoContainer: {
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        borderRadius: 4,
    },
    name: {
        fontSize: 18,
    },
    address: {
        color: "grey"
    },
    numJobs: {
        alignSelf: "flex-start",
        color: "grey"
    }
});

export default EstablishmentItemAdd;
