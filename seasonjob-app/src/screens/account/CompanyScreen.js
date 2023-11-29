import React, {useState, useEffect, useContext} from 'react';
import {View, TextInput, FlatList, Text, StyleSheet, ScrollView, SafeAreaView, Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import i18n from "../../localization/i18n";
import Colors from "../../assets/colors/Colors";
import CompanyComponent from "../../components/company/CompanyComponent";
import ButtonShared from "../../shared/buttons/ButtonShared";
import axios from "axios";
import {UserContext} from "../../context/UserContext"; // Importation de l'icône de recherche

const Company = ({navigation}) => {

    const[user, setUser] = useContext(UserContext)
    const [searchQuery, setSearchQuery] = useState('');
    const backendUrl = process.env.EXPO_PUBLIC_API_URL;
    const [name, setName] = useState('');
    const [siret, setSiret] = useState('');

    const navigateEditCompany = () => {
        navigation.navigate('EditCompany');
    };

    useEffect(() => {

        const response =  axios.get(`${backendUrl}/recruiter/api/protected/companies/${user.company_id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + user.token
            },
        })
            .then(response => {
                setName(response.data.name);
                setSiret(response.data.siren);
            })
            .catch(error => {
                console.error('Erreur lors de la requête pour récupérer lentreprse :', error);
            });
    }, []);

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.view}>
                    <View style={styles.titleSectionContainer}>
                        <Text style={styles.title}>{i18n.t("my_company")}</Text>
                    </View>
                </View>
                {
                    user.company_id !== 0 ?<View style={styles.view}>
                        <View style={styles.companyContainer}>
                            <View style={styles.logoContainer}>
                            </View>
                            <View style={styles.companyTextContainer}>
                                <Text style={styles.companyText}>{name}</Text>
                                <Text style={styles.companyText}>{siret}</Text>
                            </View>
                        </View>
                    </View> : <View style={styles.view}>
                        <Text style={styles.title}>{i18n.t("no_company")}</Text>
                    </View>
                }

                <View style={[styles.view, { marginVertical: 20 }]}>
                    <ButtonShared label={i18n.t("edit")}
                                  onPress={navigateEditCompany}
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
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: '100%',
        marginTop: 20,
    },
    titleView: {
        fontSize: 34,
        fontWeight: 'bold',
        color: Colors.darkGrey.color,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
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
    container: {
        flex: 1,
        padding: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        borderWidth: 0,
        paddingHorizontal: 10,
    },
    searchIcon: {
        paddingHorizontal: 10,
    },
    noResultText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'gray',
    },
    resultItem: {
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderBottomColor: '#ccc',
    },
    companyContainer: {
        width: '100%',
        paddingVertical: 22,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#eaeaea',
        borderRadius: 4,
        marginBottom: 16,
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    companyText: {
        fontSize: 16,
        color: Colors.darkGrey.color,
        fontWeight: 'bold',
    },
    logoContainer: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: Colors.darkGrey.color,
        alignItems: 'center',
        justifyContent: 'center',
    },
    companyTextContainer: {
        marginLeft: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    }
});

export default Company;
