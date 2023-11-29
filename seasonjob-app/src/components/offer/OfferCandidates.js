import React, { useState, useEffect } from 'react';

import { StyleSheet, View, SafeAreaView, Pressable, Image } from 'react-native';
import { Card, List, Text, Button } from '@ui-kitten/components';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';

import t from '../../utils/translation';
import IconText from '../IconText';
import Colors from '../../assets/colors/Colors';

const OfferCandidates = ({ navigation, route }) => {

    const [offer, setOffer] = useState({});

    useEffect(() => {
        if (route.params && route.params.offer) {
            setOffer(route.params.offer);
        }
    }, [route.params]);

    const handleDelete = () => {
        console.log('Delete');
    }

    return (
        <SafeAreaView style={styles.container} >
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

            <View style={styles.buttonContainer}>
                <Button
                style={styles.button}
                status='primary'
                onPress={() => navigation.navigate('OfferDetails', offer)}
                >
                    <IconText iconClass={Icon5} iconName="edit" text={t('edit')} iconColor={'white'} textStyle={{ color: 'white' }} />
                </Button>
                <Button
                style={styles.button}
                status='danger'
                onPress={handleDelete}
                >
                    <IconText iconClass={Icon5} iconName="trash" text={t('delete')} iconColor={'white'} textStyle={{ color: 'white' }} />
                </Button>
            </View>

            <Text category='h5' style={{ marginVertical: 16, marginHorizontal: 16, marginTop: 32 }}>
                {t('candidates')}
            </Text>
            <List
                style={styles.list}
                data={offer.candidates}
                renderItem={({ item, index }) => (
                    <Pressable style={styles.avisContainer} onPress={() => navigation.navigate('CandidateDetails', item)} >
                        <View style={styles.imageContainer}>
                            <Image src="" style={styles.image} />
                        </View>
                        <View style={styles.candidatContainer}>
                            <Text style={styles.candidatInfo}>{item.firstName} {item.lastName}</Text>
                            <Text>{item.job}</Text>
                        </View>
                        <View style={styles.rightContainer}>
                            <IconText iconClass={Icon} iconName="star" text={item.rating} iconColor={'pink'} />
                            <Text style={styles.date}>({item.nbReviews} {t('reviews')})</Text>
                        </View>
                    </Pressable>
                )}
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
        height: '100%',
    },
    card: {
        marginVertical: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        marginHorizontal: 4,
    },
    button: {
        margin: 2,
        width: '48%',
    },
    avisContainer: {
        width: "100%",
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 10,
    },
    imageContainer: {
        width: "30%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 100,
        backgroundColor: 'grey'
    },
    candidatContainer: {
        width: "40%",
        height: "100%",
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    candidatInfo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.darkGrey.color,
    },
    rightContainer: {
        width: "30%",
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
});

export default OfferCandidates;
