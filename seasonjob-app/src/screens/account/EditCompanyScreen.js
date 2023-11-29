import React, {useState, useEffect, useContext} from 'react';
import {View, TextInput, FlatList, Text, StyleSheet, ScrollView, SafeAreaView, Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import i18n from "../../localization/i18n";
import Colors from "../../assets/colors/Colors";
import CompanyComponent from "../../components/company/CompanyComponent";
import axios from "axios";
import {UserContext} from "../../context/UserContext"; // Importation de l'icône de recherche

const EditCompany = ({navigation}) => {

    const backendUrl = process.env.EXPO_PUBLIC_API_URL;
    const[user, setUser] = useContext(UserContext)
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [companies, setCompanies] = useState([{}]);
    const [change, setChange] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState();

    async function putCompany(id) {

        Alert.alert(
            'Confirmation',
            'Les établissements associés à votre compte seront supprimés. Voulez-vous continuer ?',
            [
                {
                    text: 'Annuler', // Bouton pour annuler l'action
                    style: 'cancel', // Style pour le bouton d'annulation
                    onPress: () => {
                        navigation.navigate('Profile');
                    }
                },
                {
                    text: 'Confirmer', // Bouton pour confirmer l'action
                    onPress: async () => {
                        try {
                            const requestBody = {
                                firstName: user.firstName,
                                lastName: user.lastName,
                                phone: user.phone,
                                email: user.email,
                                createdAt: user.createdAt,
                                subscription: user.subscription,
                                subscription_startDate: user.subscription_startDate,
                                subscription_endDate: user.subscription_endDate,
                                company_id: id,
                                establishments: [],
                            };

                            await axios.put(`${backendUrl}/recruiter/api/protected/recruiters/${user.id}`, requestBody, {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Accept': 'application/json',
                                    'Authorization': 'Bearer ' + user.token
                                }
                            })
                                .then((response) => {
                                        console.log(response.data);
                                        setUser(
                                            {
                                                ...user,
                                                company_id: response.data.company_id,
                                                establishments:response.data.establishments,
                                            });
                                        navigation.navigate('Profile');
                                    }
                                )
                        }
                        catch (error) {
                            console.error('Erreur lors de la requête au microservice :', error);
                        }
                    },
                },
            ],
            {cancelable: false}
        );

    }

    useEffect(() => {

        const response =  axios.get(`${backendUrl}/recruiter/api/protected/companies`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + user.token
            },
        })
            .then(response => {
                setCompanies(response.data);
                setSearchResults(response.data);
            })
            .catch(error => {

            });
    }, []);

    // Fonction de recherche
    const handleSearch = (query) => {

        if (companies.length !== 0) {
            const filteredResults = companies.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filteredResults);
        }
    };


    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.view}>
                <View style={styles.titleSectionContainer}>
                    <Text style={styles.title}>{i18n.t("company")}</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <Ionicons
                        name="search"
                        size={24}
                        color="#ccc"
                        style={styles.searchIcon}
                        onPress={() => handleSearch(searchQuery)}
                    />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Rechercher..."
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                    />
                </View>
                {searchResults.length === 0 ? (
                    <Text style={styles.noResultText}>Aucun résultat</Text>
                ) : (
                    <FlatList
                        data={searchResults}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <CompanyComponent item={item} onPress={(id) => putCompany(id)} />
                        )}
                    />
                )}
            </View>

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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Colors.darkGrey.color,
    },
});

export default EditCompany;
