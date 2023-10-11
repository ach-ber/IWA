import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Linking, Image } from 'react-native';
import Colors from '../../assets/colors/Colors';
import i18n from "../../localization/i18n";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { A } from "@expo/html-elements";

import ButtonShared from '../../shared/buttons/ButtonShared';

const CandidateScreen = ({ navigation }) => {
    const handleEmailPress = (email) => {
        Linking.openURL(`mailto:${email}`);
    }

    const handlePhonePress = (phone) => {
        Linking.openURL(`tel:${phone}`);
    }

    const [hiring, setHiring] = useState(true);
    const [hireButtonColor, setHireButtonColor] = useState("green");
    const [hireButtonText, setHireButtonText] = useState("Recruter le candidat");

    const handleHireButtonPress = () => {
        if (hiring) {
            setHiring(false);
            setHireButtonColor("red");
            setHireButtonText("Annuler le recrutement");
            // cancel hiring process
        } else {
            setHiring(true);
            setHireButtonColor("green");
            setHireButtonText("Recruter le candidat");
            // hiring process
        }
    }

    const candidateDetailsExample = {
        id: 1,
        name: "John Doe",
        address: "12 rue du moulin, 34000 Montpellier",
        phone: "+33707070707",
        email: "candidat2@email.com",
    }

    return (
        <SafeAreaView>
            <Text style={{ fontWeight: "bold", fontSize: 30, marginBottom: 10 }}>Candidate Screen</Text>

            <View style={styles.candidateContainer}>
                <View style={styles.imageContainer}>
                    <Image src="" style={styles.image} />
                </View>

                <View style={styles.candidateInfos}>
                    <Text style={styles.candidateName}>{candidateDetailsExample.name}</Text>
                    <Text>{candidateDetailsExample.address}</Text>
                    <A href={`tel:${candidateDetailsExample.phone}`}>{candidateDetailsExample.phone}</A>
                    <A href={`mailto:${candidateDetailsExample.email}`}>{candidateDetailsExample.email}</A>

                    <View style={styles.icons}>
                        <Icon name={"email"} size={styles.icons.size} color="#000" onPress={() => handleEmailPress(candidateDetailsExample.email)} />
                        <Icon name={"phone"} size={styles.icons.size} color="#000" onPress={() => handlePhonePress(candidateDetailsExample.phone)} />
                    </View>
                </View>
            </View>

            {/* la potentiellement ScrollView */}

            <View style={{ margin: 10 }}>
                <ButtonShared label={hireButtonText}
                    onPress={() => handleHireButtonPress()}
                    color="white"
                    backgroundColor={hireButtonColor}
                    borderColor={hireButtonColor}
                />
            </View>

            <Text>Expériences</Text>
            <Text>voir tout</Text>

            {/* intitulé, quel entreprise, durée genre fev-mars 2024 */}
            <Text>Expérience 1</Text>
            <Text>Expérience 2</Text>
            <Text>Expérience 3</Text>

            <Text>Avis</Text>
            {/* attente du merge de achille */}

            <Text>Référents</Text>
            {/* attente du merge de achille */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    candidateContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    imageContainer: {
        width: "30%",
        height: "100%",
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: 'grey'
    },
    candidateInfos: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    },
    candidateName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        size: 40,
    },
    scrollView: {
        width: '90%',
        marginTop: 20,
        borderRadius: 10,
        marginHorizontal: "5%",
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
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
    titleSectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 60,
        width: '100%',
    },
    titleSection: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: Colors.darkGrey.color,
    }
});
export default CandidateScreen;
