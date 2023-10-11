import React, { useState } from 'react';
import SmallButton from '../../shared/buttons/SmallButton';
import TopBar from '../../shared/TopBar';

import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';

import t from '../../utils/translation';

const OfferList = ({ navigation, list }) => {

    const handlePlus = () => {
        navigation.navigate('OfferDetails');
    };

    const handleSort = () => {
        console.log('handleSort');
    };

    return (
        <SafeAreaView style={styles.container} >
            <TopBar title={t('my_offers')} handlePlus={handlePlus} />
            <SmallButton onPress={handleSort} text={t("sort")} style={{ backgroundColor: 'white' }} />

            <List
                style={styles.list}
                data={list}
                renderItem={(info) =>
                    <Card
                        style={styles.card}
                        header={
                            <View>
                                <Text category='h6'>
                                    {info.item.title}
                                </Text>
                            </View>
                        }
                    >
                        <Text>
                            {info.item.period}
                        </Text>
                    </Card>
                }
                />
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

export default OfferList;
