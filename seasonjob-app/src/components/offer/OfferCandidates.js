import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';

import t from '../../utils/translation';

const OfferCandidates = () => {

    const route = useRoute();
    const [offer, setOffer] = useState(null);

    useEffect(() => {
        setOffer(() => { 
            if (route?.params?.offer) {
                setOffer(route.params.offer);
            }
            else {
                setOffer(null);
            }
        })
    }, [route]);

    return (
        <SafeAreaView style={styles.container} >
            {
                offer && 
                <Card
                    style={styles.card}
                    header={
                        <View>
                            <Text category='h6'>
                                {offer.title}
                            </Text>
                        </View>
                    }
                >
                    <Text>
                        {offer.period}
                    </Text>
                </Card>
            }
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
