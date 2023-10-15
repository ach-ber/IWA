import {View, Text, StyleSheet, ScrollView} from "react-native";
import AvisItem from "../../components/avis/AvisItem";
import AddButton from "../../shared/buttons/AddButton";
import Colors from "../../assets/colors/Colors";
import i18n from "../../localization/i18n";

export default function AvisListScreen({navigation}) {

    const Avis = [
        {id: 1, nom: "nom", prenom: "prenom", note: 9, job: "Serveur", date: "11-09-2023",titre:"titre avis 1",avis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",},
        {id: 2, nom: "nom", prenom: "prenom", note: 8, job: "Serveur", date: "11-09-2023",titre:"titre avis 2",avis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",},
        {id: 3, nom: "nom", prenom: "prenom", note: 3, job: "Serveur", date: "11-09-2023",titre:"titre avis 3",avis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",},
        {id: 4, nom: "nom", prenom: "prenom", note: 5, job: "Serveur", date: "11-09-2023",titre:"titre avis 4",avis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",},
        {id: 5, nom: "nom", prenom: "prenom", note: 1, job: "Serveur", date: "11-09-2023",titre:"titre avis 5",avis:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",},
    ];
    const navigateAvisDetails = (avis) => {
        navigation.navigate('AvisDetails', { avis });
    };

    const navigateAvisAdd = () => {
        navigation.navigate('AvisAdd');
    };

    return (
        <View style={styles.listContainer}>
            <AddButton onPress={() => navigateAvisAdd()} backgroundColor={Colors.darkGrey.color} color="#FFFFFF" />
            <ScrollView style={styles.scrollContainer}>
                <Text style={styles.title}>{i18n.t("review")}</Text>
                {
                    Avis.map((avis) => {
                        return <AvisItem key={avis.id} avis={avis} onpress={ () =>  navigateAvisDetails(avis)}/>
                    })
                }
            </ScrollView>
        </View>
    );
}

//<AvisItem nom="nom" prenom="prenom" note={8} job="Serveur" date="11-09-2023" onpress={ () =>  navigateAvisDetails()}/>

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