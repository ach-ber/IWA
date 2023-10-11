import React, { useState } from 'react';

import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';

import t from '../../utils/translation';

const OfferCandidates = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container} >
            
        </SafeAreaView >
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    list: {
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: 'transparent',
    },
    card: {
        marginVertical: 8,
    },
});

export default OfferCandidates;
