import React, {useState, useEffect, useContext} from 'react';
import {View, TextInput, FlatList, Text, StyleSheet, ScrollView, SafeAreaView, Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import i18n from "../../localization/i18n";
import Colors from "../../assets/colors/Colors";
import CompanyComponent from "../../components/company/CompanyComponent";
import axios from "axios";
import {UserContext} from "../../context/UserContext";
import EstablishmentItem from "../../components/Establishment/EstablishmentItem";
import EstablishmentItemAdd from "../../components/Establishment/EstablishmentItemAdd";
import ButtonShared from "../../shared/buttons/ButtonShared"; // Importation de l'icône de recherche

const EditEstablishmentScreen = ({navigation}) => {

    const backendUrl = process.env.EXPO_PUBLIC_API_URL;
    const[user, setUser] = useContext(UserContext)
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [companies, setCompanies] = useState([{}]);
    const [change, setChange] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState();
    const [selectedItems, setSelectedItems] = useState([]);
    const [establishmentsDispo, setEstablishmentsDispo] = useState([{}]);


    async function putEstablishments() {

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
                company_id: user.company_id,
                establishments: selectedItems,
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
                                establishments:response.data.establishments,
                            });
                        navigation.navigate('Profile');
                    }
                )
        }
        catch (error) {
            console.error('Erreur lors de la requête au microservice :', error);
        }


    }

    useEffect(() => {
        setSelectedItems(user.establishments);
        const response =  axios.get(`${backendUrl}/recruiter/api/protected/companies/${user.company_id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + user.token
            },
        })
            .then(response => {
                //setCompanies(response.data);
                console.log("response", response.data.establishments);
                setSearchResults(response.data.establishments);
                //setEstablishmentsDispo(response.data.filter((item) => !user.establishments.includes(item.id)));
            })
            .catch(error => {

            });
    }, []);

    useEffect(
        () => {
            console.log(selectedItems);
        }
    , [selectedItems]);


    // Fonction de recherche
    const handleSearch = (query) => {

        if (searchResults.length !== 0) {
            const filteredResults = searchResults.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filteredResults);
        }
    };


    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={styles.view}>
                <View style={styles.titleSectionContainer}>
                    <Text style={styles.title}>{i18n.t("establishment")}</Text>
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
                            //<CompanyComponent item={item} onPress={(id) => putCompany(id)} />
                            <EstablishmentItemAdd key={item.id} onPress={() => selectedItems.find(
                                (id) => id === item.id
                            )? setSelectedItems(selectedItems.filter(id => id !== item.id)) : setSelectedItems([...selectedItems, item.id])} name={item.name} address={item.address} selected={
                                selectedItems.find((id) => id === item.id)}
                                                  addressDTO={item.addressDTO}/>
                        )}
                    />
                )}
            </View>
                <View style={[styles.view, {marginVertical: 20}]}>
                    <ButtonShared label={i18n.t("save")}
                                  color="white"
                                  backgroundColor={Colors.darkGrey.color}
                                  borderColor={Colors.darkGrey.color}
                                  onPress={() => putEstablishments()}
                    />
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
        maxHeight:'60%'
        //maxHeight: 400,
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

export default EditEstablishmentScreen;
