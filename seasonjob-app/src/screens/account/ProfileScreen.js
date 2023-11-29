import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView, Pressable} from 'react-native';
import LinkShared from "../../shared/links/LinkShared";
import {Entypo, Ionicons} from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ButtonShared from "../../shared/buttons/ButtonShared";
import FormuleUniqueComponent from "../../components/Formule/FormuleUniqueComponent";
import Colors from '../../assets/colors/Colors';
import i18n from "../../localization/i18n";
import axios from 'axios';
import {UserContext} from "../../context/UserContext";
import { LinearGradient } from 'expo-linear-gradient';

const ProfileScreen = ({ navigation }) => {

    const navigateCompany = () => {
        if (user.company_id != 0) {
            navigation.navigate('Company');
        } else {
            navigation.navigate('EditCompany');
        }
    }
    const navigateFormule = () => {
        navigation.navigate('Formule');
    };

    const navigateEdit = () => {
        navigation.navigate('EditProfile');
    };

    const navigateEstablishments = () => {
        navigation.navigate('EtablishmentList');
    }

    useEffect(() => {
        console.log("user", user);
    }, []);

    const backendUrl = process.env.EXPO_PUBLIC_API_URL;

    const [user, setUser] = useContext(UserContext);

    useEffect(() => {

        const requestBody = {
            email: user.email,
            password: user.password,
        };

        console.log("requestBody", requestBody);
        // 192.168.1.194

        const response =  axios.post(`${backendUrl}/user/api/public/token`, requestBody,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
        })
            .then(response => {
                let token = response.data;
                axios.get(`${backendUrl}/user/api/protected/userInfo`,{
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                }).then(
                    response => {
                        setUser({
                            ...user,
                            id: response.data.id,
                            firstName: response.data.firstName,
                            lastName: response.data.lastName,
                            phone: response.data.phone,
                            createdAt: response.data.createdAt,
                            subscription: response.data.subscription,
                            subscription_startDate: response.data.subscription_startDate,
                            subscription_endDate: response.data.subscription_endDate,
                            company_id: response.data.company_id,
                            establishments: response.data.establishments,
                            token: token,
                        });
                    }
                )
            })
            .catch(error => {
                console.error('Erreur lors de la requête pour récupérer le profile :', error);
            });
    }, []);

    const logout = () => {
        setUser({
            ...user,
            id: null,
            firstName: null,
            lastName: null,
            phone: null,
            createdAt: null,
            subscription: null,
            subscription_startDate: null,
            subscription_endDate: null,
            company_id: null,
            establishments: null,
            token: null,
            login: false
        });
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView} >
                <View style={styles.view}>
                    <View style={styles.titleSectionContainer}>
                        <Text style={styles.titleView}>{i18n.t("account")}</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    <View style={styles.initialContainer}>
                        <View style={styles.initial}><Text style={styles.initialLetter}>{user.firstName?.charAt(0).toUpperCase()} {user.lastName?.charAt(0).toUpperCase()}</Text></View>
                        <Text style={styles.initialText}>{user.firstName} {user.lastName}</Text>
                    </View>
                </View>
                <View style={[styles.view, { marginVertical: 20 }]}>
                    <FormuleUniqueComponent
                        date={i18n.t("renewal", { date: user.subscription_endDate })}
                        backgroundColor="grey"
                        borderColor={Colors.borderGrey.color}
                        subscription={user.subscription}
                        onPress={navigateFormule} />
                </View>
                <View style={styles.view}>
                    <Pressable style={styles.linkDetailsContainer} onPress={navigateEdit} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="person-circle" size={24} color="#111425" />
                            <Text style={styles.linkText}>{i18n.t("my_information")}</Text>
                        </View>
                        <Entypo name="chevron-right" size={24} color="#111425" />
                    </Pressable>
                </View>
                <View style={styles.view}>
                    <Pressable style={styles.linkDetailsContainer} onPress={navigateCompany} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="person-circle" size={24} color="#111425" />
                            <Text style={styles.linkText}>{i18n.t("my_company")}</Text>
                        </View>
                        <Entypo name="chevron-right" size={24} color="#111425" />
                    </Pressable>
                </View>
                <View style={styles.view}>
                    <Pressable style={styles.linkDetailsContainer} onPress={navigateEstablishments}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Ionicons name="person-circle" size={24} color="#111425" />
                            <Text style={styles.linkText}>{i18n.t("my_establishments")}</Text>
                        </View>
                        <Entypo name="chevron-right" size={24} color="#111425" />
                    </Pressable>
                </View>
                <View style={[styles.view, { marginVertical: 40 }]}>
                    <ButtonShared label={i18n.t("disconnect")}
                        onPress={logout}
                        color="white"
                        backgroundColor={Colors.red.color}
                        borderColor={Colors.red.color}
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
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
    },
    titleSectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
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
    titleSection: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: Colors.darkGrey.color,
    },
    initialContainer: {
        width: '100%',
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    initial: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: Colors.darkGrey.color,
        alignItems: 'center',
        justifyContent: 'center',
    },
    initialLetter: {
        fontSize: 18,
        fontWeight:'normal',
        color: 'white',
        textAlign: 'center',
    },
    initialText: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.darkGrey.color
    },
    linkDetailsContainer: {
        width: '100%',
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor:Colors.lightGrey.color,
        borderBottomWidth: 1,
    },
    linkText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: Colors.darkGrey.color,
        marginLeft: 10,
    }
});
export default ProfileScreen;
