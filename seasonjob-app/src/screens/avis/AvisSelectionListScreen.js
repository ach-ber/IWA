import {View, Text, StyleSheet, ScrollView, SafeAreaView} from "react-native";
import i18n from "../../localization/i18n";
import CandidateList from "../../components/candidate/CandidateList";

export default function AvisSelectionListScreen({ navigation }) {

    const Candidates = [
        { id: 1, nom: "nom", prenom: "prenom", note: 9, job: "Serveur", date: "11-09-2023" },
        { id: 2, nom: "nom", prenom: "prenom", note: 8, job: "Serveur", date: "11-09-2023" },
        { id: 3, nom: "nom", prenom: "prenom", note: 3, job: "Serveur", date: "11-09-2023" },
        { id: 4, nom: "nom", prenom: "prenom", note: 5, job: "Serveur", date: "11-09-2023" },
        { id: 5, nom: "nom", prenom: "prenom", note: 1, job: "Serveur", date: "11-09-2023" },
    ];
    const navigateAvisDetails = (avis) => {
        navigation.navigate('AvisDetails', { avis });
    };

    const navigateAvisAdd = () => {
        navigation.navigate('AvisAdd');
    };

    return (
        <SafeAreaView style={styles.listContainer}>
            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.title}>{i18n.t("review")}</Text>
                <CandidateList Candidates={Candidates} onPress={() => navigateAvisAdd()} navigation={ navigation } />
            </ScrollView>
        </SafeAreaView>
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