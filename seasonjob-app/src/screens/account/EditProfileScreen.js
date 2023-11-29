import React, {useContext, useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import t from '../../utils/translation';
import i18n from "../../localization/i18n";
import {UserContext} from "../../context/UserContext";
import axios from "axios";
import ButtonShared from "../../shared/buttons/ButtonShared";
import Colors from "../../assets/colors/Colors";

export default function EditProfileScreen({ navigation }) {
    const navigateProfile = () => {
        navigation.navigate('Profile');
    };

    const backendUrl = process.env.EXPO_PUBLIC_API_URL;

    const [user, setUserContext] = useContext(UserContext);
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (user.lastName) {
            setLastName(user.lastName);
        }
        if (user.firstName) {
            setFirstName(user.firstName);
        }
        if (user.phone) {
            setPhone(user.phone);
        }
    }, [user]);

    const handleLastNameChange = (event) => {setLastName(event.target.value);};
    const handleFirstNameChange = (event) => {setFirstName(event.target.value);};
    const handlePhoneChange = (event) => {setPhone(event.target.value);};


    const putUser = async () => {

        const requestBody = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: user.email,
            createdAt: user.createdAt,
            subscription: user.subscription,
            subscription_startDate: user.subscription_startDate,
            subscription_endDate: user.subscription_endDate,
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
                        setUserContext({
                            ...user,
                            lastName: response.data.lastName,
                            firstName: response.data.firstName,
                            phone: response.data.phone,
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
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.title}>
                    {i18n.t("my_information")}
                </Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>
                        {i18n.t("phone")}
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="phone-pad"
                        autoCapitalize="none"
                        onChangeText={text => setPhone(text)}
                        defaultValue={user.phone}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>
                        {i18n.t("firstname")}
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="default"
                        autoCapitalize="none"
                        onChangeText={text => setFirstName(text)}
                        defaultValue={user.firstName}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>
                        {i18n.t("lastname")}
                    </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="default"
                        autoCapitalize="none"
                        onChangeText={text => setLastName(text)}
                        defaultValue={user.lastName}
                    />
                </View>
            </View>

            <View style={[styles.view, {marginVertical: 20}]}>
                <ButtonShared label={i18n.t("edit")}
                              color="white"
                              backgroundColor={Colors.darkGrey.color}
                              borderColor={Colors.darkGrey.color}
                              onPress={putUser}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 16,
    },
    topSection: {
        flex: 1,

        justifyContent: 'flex-start',
        width: '100%',
        maxHeight: "60%",
    },
    bottomSection: {
        width: '100%',
        marginBottom: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 32,
        marginTop: 32,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 12,
    },
    label: {
        fontSize: 16,
        marginBottom: 6,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 12,
    },
    passwordInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
    passwordInput: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
    },
    eyeIconContainer: {
        padding: 10,
    },
    button: {
        width: '100%',
        backgroundColor: '#66CA98',
        borderRadius: 4,
        paddingVertical: 12,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    signUpText: {
        textAlign: 'center',
        marginTop: 16,
        fontSize: 16,
    },
    signUpLink: {
        color: '#66CA98',
        textDecorationLine: 'underline',
    },
    forgotPwdLink: {
        color: '#66CA98',
        marginTop: 12,
        textAlign: 'right',
    },
});

