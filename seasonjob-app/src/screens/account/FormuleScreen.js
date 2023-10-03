import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView, Button} from 'react-native';
import Colors from '../../assets/colors/Colors';
import FormuleComponent from "../../components/Formule/FormuleComponent";
const FormuleScreen = ({ navigation }) => {
    const descriptionFree = ["Candidats limité","Accès profile simple"]
    const descriptionSilver = ["Candidats limité","Accès profile complet"]
    const descriptionGold = ["Candidats illimité","Accès profile complet"]
    const descriptionPlatinum = ["Candidats illimité","Accès profile complet","Accès à la messagerie","Accès aux offres d'emploi"]
    const [selected,setSelected] = useState([true,false,false,false])
    const changeSelected = (index) => {
        let newSelected = [false,false,false,false];
        newSelected[index] = true;
        setSelected(newSelected);
        alert("selected : " +index + " value : " + selected[index] )
    }

    return (
        <ScrollView style={styles.scrollView}>
            <SafeAreaView >
                <View>
                    <FormuleComponent
                        title="Free"
                        description={descriptionFree}
                        price="GRATUIT"
                        date="10-09-2023"
                        backgroundColor="grey"
                        borderColor={Colors.borderGrey.color}
                        onPress={() => changeSelected(0)}
                        selected={selected[0]}
                    />
                    <FormuleComponent
                        title="Silver"
                        description={descriptionSilver}

                        price="5€ / mois"
                        date="10-09-2023"
                        backgroundColor="grey"
                        borderColor={Colors.borderGrey.color}
                        onPress={() => changeSelected(1)}
                        selected={selected[1]}
                    />
                    <FormuleComponent
                        title="Gold"
                        description={descriptionGold}
                        price="12€ / mois"
                        date="10-09-2023"
                        backgroundColor="grey"
                        borderColor={Colors.borderGrey.color}
                        onPress={() => changeSelected(2)}
                        selected={selected[2]}
                    />
                    <FormuleComponent
                        title="Platinum"
                        description={descriptionPlatinum}
                        price="25€ / mois"
                        date="10-09-2023"
                        backgroundColor="grey"
                        borderColor={Colors.borderGrey.color}
                        onPress={() => changeSelected(3)}
                        selected={selected[3]}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        width: '90%',
        marginTop: 20,
        borderRadius: 10,
        marginHorizontal: "5%",
        height: '100%',
        backgroundColor: "white",
        display: 'flex',
        flexDirection: 'column',
    },
});
export default FormuleScreen;
