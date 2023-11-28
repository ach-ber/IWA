import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView, Alert, Text} from 'react-native';
import Colors from '../../assets/colors/Colors';
import FormuleComponent from "../../components/Formule/FormuleComponent";
import i18n from "../../localization/i18n";
import {UserContext} from "../../context/UserContext";
import axios from "axios";
/*
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

 */
const FormuleScreen = ({navigation}) => {
    const [user, setUser] = useContext(UserContext);
    const descriptionFree = [i18n.t("formula_descr.limited_candidate"), i18n.t("formula_descr.simple_profile")];
    const descriptionSilver = [i18n.t("formula_descr.limited_candidate"), i18n.t("formula_descr.full_profile")];
    const descriptionGold = [i18n.t("formula_descr.unlimited_candidate"), i18n.t("formula_descr.full_profile")];
    const descriptionPlatinum = [i18n.t("formula_descr.unlimited_candidate"), i18n.t("formula_descr.full_profile"), i18n.t("formula_descr.messaging"), i18n.t("formula_descr.job_offers")];
    const [selected, setSelected] = useState([false, false, false, false])
    const [newSubscription, setNewSubscription] = useState();
    const [newSubscription_startDate, setNewSubscription_startDate] = useState('');
    const [newSubscription_endDate, setNewSubscription_endDate] = useState('');
    const[initialise, setInitialise] = useState(false);
    const[idSubscription, setIdSubscription] = useState();
    const[changement, setChangement] = useState(false);

    const [idsubContext, setIdsubContext] = useState();

    useEffect( () => {
        if (user.subscription === 'ROLE_FREE') {
            setSelected([true, false, false, false]);
            setIdsubContext(0);
        }
        else if (user.subscription === 'ROLE_SILVER') {
            setSelected([false, true, false, false]);
            setIdsubContext(1);
        }
        else if (user.subscription === 'ROLE_GOLD') {
            setSelected([false, false, true, false]);
            setIdsubContext(2);
        }
        else if (user.subscription === 'ROLE_PLATINUM') {
            setSelected([false, false, false, true]);
            setIdsubContext(3);
        }
        setInitialise(true)
    },[user.subscription]);


    const changeSelected = (index) => {

            setIdSubscription(index);
            //let newSelected = [false, false, false, false];
            //newSelected[index] = true;
            //setSelected(newSelected);
            //setChangement(!changement);
            console.log("idSubscription : " + idSubscription + " index : " + index);

    }

    const backendUrl = process.env.EXPO_PUBLIC_API_URL;

    useEffect( () => {
        if (initialise) {
            console.log("idSubscription useefct : " + idSubscription);
            if (idSubscription == 0 && !selected[0]) {
                setNewSubscription('ROLE_FREE');
                const newEndDate = addOneMonthToDate(getCurrentDate());
                const newStartDate = getCurrentDate();
                setNewSubscription_startDate(newStartDate);
                setNewSubscription_endDate(null);
            }
            else if (idSubscription == 1 && !selected[1]) {
                setNewSubscription('ROLE_SILVER');
                const newEndDate = addOneMonthToDate(getCurrentDate());
                const newStartDate = getCurrentDate();
                setNewSubscription_startDate(newStartDate);
                setNewSubscription_endDate(newEndDate);
            }
            else if (idSubscription == 2 && !selected[2]) {
                setNewSubscription('ROLE_GOLD');
                const newEndDate = addOneMonthToDate(getCurrentDate());
                const newStartDate = getCurrentDate();
                setNewSubscription_startDate(newStartDate);
                setNewSubscription_endDate(newEndDate);
            }
            else if (idSubscription == 3 && !selected[3]) {
                setNewSubscription('ROLE_PLATINUM');
                const newEndDate = addOneMonthToDate(getCurrentDate());
                const newStartDate = getCurrentDate();
                setNewSubscription_startDate(newStartDate);
                setNewSubscription_endDate(newEndDate);
            }

        }
    },[idSubscription]);
// idsuscription

    useEffect( () => {
        if (initialise) {

            Alert.alert(
                'Confirmation',
                'Êtes-vous sûr de vouloir effectuer cette action ?', // Le message de confirmation
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
                            console.log("newSubscription : " + newSubscription + " newSubscription_startDate : " + newSubscription_startDate + " newSubscription_endDate : " + newSubscription_endDate);
                            await putUser();
                        },
                    },
                ],
                {cancelable: false}
            );
        }
    },[newSubscription]);


//newSubscription



    /*
        useEffect( () => {
            if (user.subscription === 'ROLE_FREE') {
                setSelected([true, false, false, false]);
            }
            else if (user.subscription === 'ROLE_SILVER') {
                setSelected([false, true, false, false]);
            }
            else if (user.subscription === 'ROLE_GOLD') {
                setSelected([false, false, true, false]);
            }
            else if (user.subscription === 'ROLE_PLATINUM') {
                setSelected([false, false, false, true]);
            }
            setInitialise(true)
        },[user.subscription]);

        useEffect(  () => {
            async function putUserInfos() {
                if (selected[0] && initialise) {
                    setNewSubscription('ROLE_FREE');
                    setNewSubscription_startDate('2021-09-10');
                    setNewSubscription_endDate('2023-12-28');
                    await putUser();
                } else if (selected[1] && initialise) {
                    setNewSubscription('ROLE_SILVER');
                    setNewSubscription_startDate('2021-09-10');
                    setNewSubscription_endDate('2023-12-28');
                    await putUser();
                } else if (selected[2] && initialise) {
                    setNewSubscription('ROLE_GOLD');
                    setNewSubscription_startDate('2021-09-10');
                    setNewSubscription_endDate('2023-12-28');
                    await putUser();
                } else if (selected[3] && initialise) {
                    setNewSubscription('ROLE_PLATINUM');
                    setNewSubscription_startDate('2021-09-10');
                    setNewSubscription_endDate('2023-12-28');
                    await putUser();
                }
            }
            putUserInfos();
        }, [selected]);


     */
    const setParams = (index) => {
        if (index == 0) {
            setNewSubscription('ROLE_FREE');
            setNewSubscription_startDate('2021-09-10');
            setNewSubscription_endDate('2023-12-28');
        }
        else if (index == 1) {
            setNewSubscription('ROLE_SILVER');
            setNewSubscription_startDate('2021-09-10');
            setNewSubscription_endDate('2023-12-28');
        }
        else if (index == 2) {
            setNewSubscription('ROLE_GOLD');
            setNewSubscription_startDate('2021-09-10');
            setNewSubscription_endDate('2023-12-28');
        }
        else if (index == 3) {
            setNewSubscription('ROLE_PLATINUM');
            setNewSubscription_startDate('2021-09-10');
            setNewSubscription_endDate('2023-12-28');
        }
    }


    const putUser = async () => {
        let requestBody = {
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            email: user.email,
            createdAt: user.createdAt,
            subscription: newSubscription,
            subscription_startDate: newSubscription_startDate,
            subscription_endDate: newSubscription_endDate,
            company_id: user.company_id,
            establishments: user.establishments,
        };
        try {
            await axios.put(`${backendUrl}/recruiter/api/protected/recruiters/${user.id}`, requestBody, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + user.token
                }
            })
                .then((response) => {
                        console.log(response.data);
                        setUser({
                            ...user,
                            subscription: response.data.subscription,
                            subscription_startDate: response.data.subscription_startDate,
                            subscription_endDate: response.data.subscription_endDate,
                        });
                        navigation.navigate('Profile');
                    }
                )
        }
        catch (error) {
            console.error('Erreur lors de la requête au microservice :', error);
        }

    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView style={styles.scrollView} >
                <View style={styles.view}>
                    <View style={styles.titleSectionContainer}>
                        <Text style={styles.titleView}>{i18n.t("formula")}</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    <FormuleComponent
                        title={i18n.t("formula_option.free")}
                        description={descriptionFree}
                        price={i18n.t("price_formula_free")}
                        date={"Aucun prélevement"}
                        backgroundColor="grey"
                        borderColor={Colors.borderGrey.color}
                        onPress={() => changeSelected(0)}
                        selected={selected[0]}
                        colorGradient={['#4c669f', '#3b5998', Colors.darkGrey.color]}
                    />
                    <FormuleComponent
                        title={i18n.t("formula_option.silver")}
                        description={descriptionSilver}
                        price={i18n.t("price_formula", { price: "5" })}
                        date={i18n.t("renewal", { date: user.subscription_endDate })}
                        backgroundColor="grey"
                        borderColor={Colors.borderGrey.color}
                        onPress={() => changeSelected(1)}
                        selected={selected[1]}
                        colorGradient={['#b7b7b7', '#616f8d', Colors.darkGrey.color]}
                    />
                    <FormuleComponent
                        title={i18n.t("formula_option.gold")}
                        description={descriptionGold}
                        price={i18n.t("price_formula", { price: "12" })}
                        date={i18n.t("renewal", { date: user.subscription_endDate })}
                        backgroundColor="grey"
                        borderColor={Colors.borderGrey.color}
                        onPress={() => changeSelected(2)}
                        selected={selected[2]}
                        colorGradient={['#e8cb6a', '#9a8848', Colors.darkGrey.color]}
                    />
                    <FormuleComponent
                        title={i18n.t("formula_option.platinum")}
                        description={descriptionPlatinum}
                        price={i18n.t("price_formula", { price: "25" })}
                        date={i18n.t("renewal", { date: user.subscription_endDate })}
                        backgroundColor="grey"
                        borderColor={Colors.borderGrey.color}
                        onPress={() => changeSelected(3)}
                        selected={selected[3]}
                        colorGradient={['#1e9f00', '#0e7000', Colors.darkGrey.color]}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );




    function addOneMonthToDate(dateString) {
        const dateParts = dateString.split('-');
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]) - 1; // Soustraire 1 car les mois commencent à 0 dans JavaScript
        const day = parseInt(dateParts[2]);

        const currentDate = new Date(year, month, day);
        currentDate.setMonth(currentDate.getMonth() + 1); // Ajouter un mois à la date actuelle

        const newYear = currentDate.getFullYear();
        const newMonth = currentDate.getMonth() + 1; // Ajouter 1 car les mois commencent à 0
        const newDay = currentDate.getDate();

        // Formatter la nouvelle date au format "YYYY-MM-DD"
        const formattedNewDate = `${newYear}-${newMonth < 10 ? '0' + newMonth : newMonth}-${newDay < 10 ? '0' + newDay : newDay}`;

        return formattedNewDate;
    }

    function getCurrentDate() {
        const currentDate = new Date();

        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Ajouter un zéro devant si nécessaire
        const day = currentDate.getDate().toString().padStart(2, '0'); // Ajouter un zéro devant si nécessaire

        // Formatter la date au format "YYYY-MM-DD"
        const formattedDate = `${year}-${month}-${day}`;

        return formattedDate;
    }

};

const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
        marginTop: 20,
    },
    safeAreaView: {
        width: '100%',
        marginTop: 0,
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 60,
        width: '100%',
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
});

export default FormuleScreen;

