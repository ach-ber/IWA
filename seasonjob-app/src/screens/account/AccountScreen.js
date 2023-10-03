import React from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView, Button} from 'react-native';
import LinkShared from "../../shared/links/LinkShared";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import ButtonShared from "../../shared/buttons/ButtonShared";
import FormuleAccountComponent from "../../components/Formule/FormuleAccountComponent";
import Colors from '../../assets/colors/Colors';
const AccountScreen = ({ navigation }) => {
    const navigateFormule = () => {
        navigation.navigate('Formule');
    };

    return (
        <ScrollView style={styles.scrollView}>
            <SafeAreaView >
                <View style={styles.view}>
                    <View style={styles.titleSectionContainer}>
                        <MaterialIcons name="stars" size={24} color="#111425" /><Text style={styles.titleSection}>Formule</Text>
                    </View>
                    <FormuleAccountComponent date="10-09-2023" backgroundColor="grey" borderColor={Colors.borderGrey.color} label="Free" onPress={navigateFormule} />
                </View>
                <View style={styles.view}>
                    <View style={styles.titleSectionContainer}>
                        <Ionicons name="person-circle" size={24} color="#111425" /><Text style={styles.titleSection}>Général</Text>
                    </View>
                    <LinkShared label="Mes informations" onPress={() => alert('You pressed a button.')} />
                    <LinkShared label="Sign Out" onPress={() => alert('You pressed a button.')} />
                </View>
                <View style={styles.view}>
                    <View style={styles.titleSectionContainer}>
                        <MaterialIcons name="group-work" size={24} color="#111425" /><Text style={styles.titleSection}>Entreprise</Text>
                    </View>
                    <LinkShared label="Mes informations" onPress={() => alert('You pressed a button.')} />
                </View>
                <View style={[styles.view,{marginVertical:20}]}>
                    <ButtonShared label="SE DECONNECTER"
                                  onPress={() => alert('You pressed a button.')}
                                  color="white"
                                  backgroundColor={Colors.red.color}
                                  borderColor={Colors.red.color}
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
        marginHorizontal:"5%",
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
        marginHorizontal:"5%",
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
        color:Colors.darkGrey.color,
    }
});
export default AccountScreen;
