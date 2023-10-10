import React, { useState } from 'react';
import SmallButton from '../../shared/buttons/SmallButton';
import TopBar from '../../shared/TopBar';

import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';

import t from '../../utils/translation';

const OfferList = ({ list }) => {

    const handlePlus = () => {
        console.log('handlePlus');
    };

    const handleSort = () => {
        console.log('handleSort');
    };

    return (
        <SafeAreaView >
            <TopBar title={t('my_offers')} handlePlus={handlePlus} />
            <SmallButton onPress={handleSort} text={t("sort")} style={{ backgroundColor: 'grey' }} />

            <List
                data={list}
                renderItem={(info) =>
                    <Card
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
    label: {
        fontSize: 16,
        marginBottom: 4,
        marginTop: 16,
    },
    select: {
        backgroundColor: 'white',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        width: '100%',
        backgroundColor: 'white',
    },
    inputTextArea: {
        minHeight: 64,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        width: '100%',
        backgroundColor: 'white',
    },
    datePicker: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        width: '100%',
    },
    button: {
        width: '100%',
        backgroundColor: '#66CA98',
        borderRadius: 4,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 32,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default OfferList;
