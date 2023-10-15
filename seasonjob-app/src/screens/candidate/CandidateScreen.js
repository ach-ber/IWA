import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Linking, Image } from 'react-native';
import Colors from '../../assets/colors/Colors';
import i18n from "../../localization/i18n";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { A } from "@expo/html-elements";
import AvisItem from '../../components/avis/AvisItem';
import ButtonShared from '../../shared/buttons/ButtonShared';
import IconText from '../../components/IconText';

const CandidateScreen = ({ navigation }) => {
    const handleEmailPress = (email) => {
        Linking.openURL(`mailto:${email}`);
    }

    const handlePhonePress = (phone) => {
        Linking.openURL(`tel:${phone}`);
    }

    const [hiring, setHiring] = useState(true);
    const [hireButtonColor, setHireButtonColor] = useState("green");
    const [hireButtonText, setHireButtonText] = useState(i18n.t("hireCandidate"));

    const handleHireButtonPress = () => {
        if (hiring) {
            setHiring(false);
            setHireButtonColor("red");
            setHireButtonText(i18n.t("cancelHiring"));
            // cancel hiring process
        } else {
            setHiring(true);
            setHireButtonColor("green");
            setHireButtonText(i18n.t("hireCandidate"));
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

    const avisExample = [
        {
            id: 1, nom: "nom", prenom: "prenom", note: 9, job: "Serveur", date: "11/09/2023", titre: "titre avis 1",
            avis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
            id: 2, nom: "nom", prenom: "prenom", note: 8, job: "Serveur", date: "11/09/2023", titre: "titre avis 2",
            avis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
    ]

    const referencesExample = [
        {
            id: 1, nom: "nom", prenom: "prenom", job: "Serveur", date: "11/09/2023", titre: "titre avis 1",
            avis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
        {
            id: 2, nom: "nom", prenom: "prenom", job: "Serveur", date: "11/09/2023", titre: "titre avis 2",
            avis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
        },
    ]

    const experiencesExample = [
        { id: 1, entreprise: "KFC", job: "Serveur", period: "Janvier-Mars 2023", },
        { id: 2, entreprise: "McDonald's", job: "Employé polyvalent", period: "Juin-Août 2023", },
    ]

    const navigateAvisDetails = (avis) => {
        navigation.navigate('AvisDetails', { avis });
    };

    return (
        <SafeAreaView>
            <ScrollView>
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

                <View style={styles.hireButtonContainer}>
                    <ButtonShared label={hireButtonText}
                        onPress={() => handleHireButtonPress()}
                        color="white"
                        backgroundColor={hireButtonColor}
                        borderColor={hireButtonColor}
                    />
                </View>

                <View style={styles.listContainer}>
                    <Text style={styles.listTitle}>{i18n.t("experiences")}</Text>
                    {
                        experiencesExample.map((experience) => {
                            return (
                                <View key={experience.id} style={styles.experienceContainer}>
                                    <Text style={styles.entrepriseTitle}>{experience.entreprise}</Text>
                                    <Text>{experience.job}</Text>
                                    <IconText iconClass={Icon} iconName="calendar" text={experience.period} />
                                </View>
                            )
                        })
                    }
                </View>

                <View style={styles.listContainer}>
                    <Text style={styles.listTitle}>{i18n.t("review")}</Text>
                    {
                        avisExample.map((avis) => {
                            return <AvisItem key={avis.id} avis={avis} onpress={() => navigateAvisDetails(avis)} />
                        })
                    }
                </View>

                <View style={styles.listContainer}>
                    <Text style={styles.listTitle}>{i18n.t("references")}</Text>
                    {
                        referencesExample.map((reference) => {
                            return <AvisItem key={reference.id} avis={reference} onpress={() => navigateAvisDetails(reference)} />
                        })
                    }
                </View>
            </ScrollView>
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
    experienceContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    entrepriseTitle: {
        fontSize: 16,
        fontWeight: 'bold',
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
    },
    listTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    listContainer: {
        marginTop: 10,
        marginHorizontal: 10,
    },
    hireButtonContainer: {
        margin: 10,
    },
});

export default CandidateScreen;
