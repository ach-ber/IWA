import { View, Text, StyleSheet, ScrollView } from "react-native";
import AvisItem from "../../components/avis/AvisItem";
import AddButton from "../../shared/buttons/AddButton";
import Colors from "../../assets/colors/Colors";
import i18n from "../../localization/i18n";
import React, { useEffect, useState } from "react";
import axios from "axios";
import transformAvis from "./AvisUtils";
import { useFocusEffect } from "@react-navigation/native";

export default function AvisListScreen({ navigation }) {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL

    const avisExample = [
        { id: 1, nom: "nom", prenom: "prenom", note: 9, job: "Serveur", date: "11-09-2023", titre: "titre avis 1", avis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", },
        { id: 2, nom: "nom", prenom: "prenom", note: 8, job: "Serveur", date: "11-09-2023", titre: "titre avis 2", avis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", },
        { id: 3, nom: "nom", prenom: "prenom", note: 3, job: "Serveur", date: "11-09-2023", titre: "titre avis 3", avis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", },
        { id: 4, nom: "nom", prenom: "prenom", note: 5, job: "Serveur", date: "11-09-2023", titre: "titre avis 4", avis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", },
        { id: 5, nom: "nom", prenom: "prenom", note: 1, job: "Serveur", date: "11-09-2023", titre: "titre avis 5", avis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", },
    ];
    const [avis, setAvis] = useState(avisExample);

    const navigateAvisDetails = (avis) => {
        navigation.navigate('AvisDetails', { avis });
    };

    const navigateAvisAdd = () => {
        navigation.navigate('AvisAdd');
    };

    const fetchData = async (recruiterId) => {
        // axios.get(`${apiUrl}/review/api/public/reviews/${recruiterId}`)
        axios.get(`${apiUrl}/review/api/public/reviews`)
            .then((response) => {
                const data = response.data
                const avis = transformAvis(data)
                setAvis(avis)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        console.log("fetching data")
        const recruiterId = "à chercher dans le storage"
        fetchData(recruiterId);
    }, []);

    useFocusEffect(
        React.useCallback(() => {
            console.log("fetching data")
            const recruiterId = "à chercher dans le storage"
            fetchData(recruiterId);
        }, [])
    );

    return (
        <View style={styles.listContainer}>
            <AddButton onPress={() => navigateAvisAdd()} backgroundColor={Colors.darkGrey.color} color="#FFFFFF" />
            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.title}>{i18n.t("review")}</Text>
                {
                    avis.map((avis) => {
                        return <AvisItem key={avis.id} avis={avis} onpress={() => navigateAvisDetails(avis)} />
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 32,
        marginTop: 32,
    },
    listContainer: {
        marginLeft: "5%",
        marginTop: 20,
        width: "90%",
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100%',
    },
    scrollContainer: {
        width: "100%",
    }
});