import React, {useContext, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import t from '../../utils/translation';
import i18n from "../../localization/i18n";
import axios from "axios";
import {UserContext} from "../../context/UserContext";

const SignUpScreen = ({ navigation }) => {

  const [user, setUser] = useContext(UserContext);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const backendUrl = process.env.EXPO_PUBLIC_API_URL;
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  }

  const handleSignUp = async () => {

    if (!email) {
      setEmailError(t("enter_email"));
    } else if (!validateEmail(email)) {
      setEmailError(t("enter_valid_email"));
    } else {
      setEmailError("");
    }

    if (!password || password.length < 8) {
      setPasswordError(t("enter_valid_password"));
    } else {
      setPasswordError("");
    }

    if (!phone) {
        setPhoneError(t("enter_phone"));
    } else if (!validatePhone(phone)) {
        setPhoneError(t("enter_valid_phone"));
    } else {
        setPhoneError("");
    }

    if (!firstName) {
        setFirstNameError(t("enter_firstname"));
    } else {
        setFirstNameError("");
    }

    if (!lastName) {
        setLastNameError(t("enter_lastname"));
    } else {
        setLastNameError("");
    }

    if ( email && password && password.length >= 8 && phone && firstName && lastName && validateEmail(email) && validatePhone(phone)) {
        const actualDate = getCurrentDate();
        const requestBody = {
            firstName: firstName,
            lastName: lastName,
            password: password,
            phone: phone,
            email: email,
            createdAt: actualDate,
            subscription: "ROLE_FREE",
            subscription_startDate: actualDate,
            subscription_endDate:null,
            company_id: null,
            establishments: null,
        };
        await axios.post(`${backendUrl}/recruiter/api/public/recruiters`, requestBody, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
            .then((response) => {
                  console.log(response.data);
                    Alert.alert(
                        t("account_created"),
                    );
                  navigation.navigate('Connexion');
                }
            )
            .catch(error => {
              console.error('Erreur lors de la requête au microservice :', error);
            }
        );
    }
  };

  function getCurrentDate() {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Ajouter un zéro devant si nécessaire
    const day = currentDate.getDate().toString().padStart(2, '0'); // Ajouter un zéro devant si nécessaire

    // Formatter la date au format "YYYY-MM-DD"
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate;
  }

  return (

   <SafeAreaView style={styles.safeAreaView}>
     <ScrollView style={styles.scrollView}>
      <View style={styles.topSection}>
        <Text style={styles.title}>
          {t("signup")}
        </Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            {i18n.t("lastname")}
          </Text>
          <TextInput
              style={[
                styles.input,
                lastNameError && { borderColor: 'red' }
              ]}
              keyboardType="default"
              autoCapitalize="none"
              onChangeText={text => setLastName(text)}
          />
          {
            lastNameError ? (
                <Text style={styles.errorText}>{lastNameError}</Text>
            ) : null
          }
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            {i18n.t("firstname")}
          </Text>
          <TextInput
              style={[
                styles.input,
                firstNameError && { borderColor: 'red' }
              ]}
              keyboardType="default"
              autoCapitalize="none"
              onChangeText={text => setFirstName(text)}
          />
          {
            firstNameError ? (
                <Text style={styles.errorText}>{firstNameError}</Text>
            ) : null
          }
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            {t("email")}
          </Text>
          <TextInput
            style={[
              styles.input,
              emailError && { borderColor: 'red' }
            ]}
            placeholder="recruteur@gmail.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>
            {t("password")}
          </Text>
          <View style={[styles.passwordInputContainer,passwordError && { borderColor: 'red' }]}>
            <TextInput
              style={[
                styles.passwordInput
              ]}
              placeholder={t("min_8_characters")}
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity
              style={styles.eyeIconContainer}
              onPress={togglePasswordVisibility}
            >
              <Icon
                name={!isPasswordVisible ? 'eye-slash' : 'eye'}
                size={20}
                color="#000"
              />
            </TouchableOpacity>
          </View>
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>
          {i18n.t("phone")}
        </Text>
        <TextInput
            style={[
              styles.input,
              phoneError && { borderColor: 'red' }
            ]}
            keyboardType="phone-pad"
            autoCapitalize="none"
            onChangeText={text => setPhone(text)}
        />
        {
            phoneError ? (
                <Text style={styles.errorText}>{phoneError}</Text>
            ) : null
        }
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>
            {t("signup")}
          </Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>
          {t("already_have_account")}
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate('Connexion')}
          >
            {t("signin")}
          </Text>
        </Text>
      </View>
      </ScrollView>
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
    marginTop: 0,
    borderRadius: 10,
    marginHorizontal: "0%",
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  topSection: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
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
    width: '90%',
    marginBottom: 12,
    marginHorizontal: "5%",
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
    width: '90%',
    backgroundColor: '#66CA98',
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
    marginHorizontal: "5%",
    marginTop: 20,
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
  errorText: {
    color: 'red',
    fontSize: 14,
  },
});

export default SignUpScreen;
