import React, { useState, useEffect } from 'react';

import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';

import t from '../../utils/translation';

const OfferCandidates = () => {

    return (
        <SafeAreaView style={styles.container} >
            <Card
                style={styles.card}
                header={
                    <View>
                        <Text category='h6'>
                            {/* {offer.title} */}
                        </Text>
                    </View>
                }
            >
                <Text>
                    {/* {offer.period} */}
                </Text>
            </Card>
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
