import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';

import SmallButton from '../../shared/buttons/SmallButton';
import EstablishmentList from '../../components/establishment/EstablishmentList';

import i18n from "../../localization/i18n"
import TopBar from '../../shared/TopBar';
import Colors from "../../assets/colors/Colors";
import ButtonShared from "../../shared/buttons/ButtonShared";
import EstablishmentItem from "../../components/establishment/EstablishmentItem";
import axios from "axios";
import {UserContext} from "../../context/UserContext";

const EstablishmentListScreen = ({ navigation }) => {

    const backendUrl = process.env.EXPO_PUBLIC_API_URL;
    const [user, setUser] = useContext(UserContext);
    const [establishments, setEstablishments] = useState([]);
    const navigateEditEstablishment = () => {
        navigation.navigate('EditEstablishment');
    }
    const handleSort = () => {
        console.log("sort")
    };

    const handlePlus = () => {
        console.log("plus")
    };

    const handleEstablishment = (item) => {
        navigation.navigate("EstablishmentDetails", { establishment: item })
    };

    useEffect(() => {

        const requestBody = {
            email: user.email,
            password: user.password,
        };

        user.establishments.map(establishment => {
            axios.get(`${backendUrl}/recruiter/api/protected/establishments/dto/${establishment}`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + user.token
                }
            }).then(
                response => {
                    console.log("response", response.data);
                    setEstablishments(establishments => [...establishments, response.data]);
                }
            )
            .catch(error => {
                console.error('Erreur lors de la requête pour récupérer le profile :', error);
            });
        });
    }, []);

    const itemsExample = [
        {
            id: 0,
            name: "Établissement 1",
            address: "12 rue du Moulins, 34000 Montpellier",
            numJobs: 3,
            numEmployees: 5,
            pastOffers: 2,
        }, {
            id: 1,
            name: "Établissement 2",
            address: "Rue du Truel, 34000 Montpellier",
            numJobs: 2,
            numEmployees: 10,
            pastOffers: 0,
        }, {
            id: 2,
            name: "Établissement 3",
            address: "Rue de l'université, 34000 Montpellier",
            numJobs: 5,
            numEmployees: 6,
            pastOffers: 1,
        }
    ];

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView}>
            <View style={styles.view}>
                <View style={styles.titleSectionContainer}>
                    <Text style={styles.title}>{i18n.t("my_establishments")}</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.topSection}>
                    {
                        establishments.length !== 0 ?
                            <View style={styles.listContainer}>
                                {establishments.map(item => (<EstablishmentItem key={item.id} onPress={() => onPress(item)} name={item.name} address={
                                 item.addressDTO.streetNum + " " +  item.addressDTO.street + ", " + item.addressDTO.zipCode + " " + item.addressDTO.city
                                } numJobs={0} />))}
                            </View> :
                            <View style={styles.view}>
                                <Text style={{}}>{i18n.t("no_establishment")}</Text>
                            </View>
                    }

                </View>
            </View>
            <View style={[styles.view, { marginVertical: 20 }]}>
                <ButtonShared label={establishments.length !== 0 ? i18n.t("edit") : i18n.t("add")}
                              onPress={navigateEditEstablishment}
                              color="white"
                              backgroundColor={Colors.darkGrey.color}
                              borderColor={Colors.darkGrey.color}
                />
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
        marginTop: 20,
    },
    safeAreaView: {
        width: '100%',
        marginTop: 0,
        borderRadius: 10,
        marginHorizontal: "0%",
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    container: {
        padding: 16,
        flex: 1,
        alignItems: 'center',
    },
    topSection: {
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
    },
    titleSectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: '100%',
    },
    titleView: {
        fontSize: 34,
        fontWeight: 'bold',
        color: Colors.darkGrey.color,
    },
    view: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: "5%",
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.darkGrey.color,
    },
    listContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginTop: 10
    },
});

export default EstablishmentListScreen;
