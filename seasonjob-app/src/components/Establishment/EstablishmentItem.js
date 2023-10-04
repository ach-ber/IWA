import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

import i18n from '../../localization/i18n';

const EstablishmentItem = ({ onPress, name, address, numJobs }) => {
    return (
        <TouchableOpacity style={styles.establishment} onPress={onPress}>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
            <Text style={styles.numJobs}>({i18n.t("numJobs", { numJobs })})</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    establishment: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
        // borderRadius: 30, // I don't get why it doesn't work
        borderRadius: 4,
        paddingVertical: 12,
        backgroundColor: "white",
        color: "#1C1F1E",
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

export default EstablishmentItem;
