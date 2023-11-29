import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import t from '../../utils/translation';
import {UserContext} from "../../context/UserContext";
import axios from "axios";

const SignInScreen = ({ navigation }) => {

  const backendUrl = process.env.EXPO_PUBLIC_API_URL;
  const [user, setUser] = useContext(UserContext);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [handle, setHandle] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleSignIn =  () => {
    if (email && password) {
      setHandle(true);
    } else {
        setPasswordError(t("enter_password"));
        setEmailError(t("enter_email"));
    }
    /*
    try {
      const requestBody = {
        email: email,
        password: password,
      };

      const response = axios.post(
          `${backendUrl}/user/api/public/token`,
          requestBody,
          {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
          }
      ).then(
          response   => {
            console.log(response.data);
            const token = response.data;
            const userInfoResponse = axios.get(`${backendUrl}/user/api/protected/userInfo`,{
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
              }
            }).then(
                response => {
                  setUser(
                      {
                        ...user,
                    id: response.data.id,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    phone: response.data.phone,
                    createdAt: response.data.createdAt,
                    subscription: response.data.subscription,
                    subscription_startDate: response.data.subscription_startDate,
                    subscription_endDate: response.data.subscription_endDate,
                    company_id: response.data.company_id,
                    establishments: response.data.establishments,
                    token: token,
                  }
                  );
                }
            )
                .catch(error => {
                  console.error('Erreur lors de la requête signin :', error);
                });
          }
        )
        .catch(error => {
            console.error('Erreur lors de la requête token :', error);
        }
      );
    } catch (error) {
      console.error('Erreur lors de la requête au microservice :', error);
    }



     */
  };

  useEffect(
  () => {
    if (handle) {
      try {
        const requestBody = {
          email: email,
          password: password,
        };

        const response = axios.post(
            `${backendUrl}/user/api/public/token`,
            requestBody,
            {
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
            }
        ).then(
            response   => {
              console.log(response.data);
              const token = response.data;
              const userInfoResponse = axios.get(`${backendUrl}/user/api/protected/userInfo`,{
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + token
                }
              }).then(
                  response => {
                    setUser(
                        {
                          ...user,
                          email: email,
                          password: password,
                          id: response.data.id,
                          firstName: response.data.firstName,
                          lastName: response.data.lastName,
                          phone: response.data.phone,
                          createdAt: response.data.createdAt,
                          subscription: response.data.subscription,
                          subscription_startDate: response.data.subscription_startDate,
                          subscription_endDate: response.data.subscription_endDate,
                          company_id: response.data.company_id,
                          establishments: response.data.establishments,
                          token: token,
                        }
                    );
                  }
              )
                  .catch(error => {
                    //console.error('Erreur lors de la requête signin :', error);
                    setEmailError(t("wrong_credentials"));
                    setPasswordError(t("wrong_credentials"));
                    setHandle(false);
                  });
            }
        )
            .catch(error => {
                  //console.error('Erreur lors de la requête token :', error);
                setEmailError(t("wrong_credentials"));
                setPasswordError(t("wrong_credentials"));
                setHandle(false);
                }
            );
      } catch (error) {
        console.error('Erreur lors de la requête au microservice :', error);
          setHandle(false);
      }
      }
    },
[handle]
  )


  useEffect(
        () => {
          if (user.id) {
            console.log("user", user);
            //navigation.navigate('Home');
            setUser({
                ...user,
                login: true
            });
          }
        },[user.id]
  )

/*
  useEffect(
        () => {
          try {
            const requestBody = {
              email: email,
              password: password,
            };

            const response = axios.post(
                `${backendUrl}/user/api/public/token`,
                requestBody,
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                  },
                }
            ).then(
                response   => {
                  console.log(response.data);
                  const token = response.data;
                  const userInfoResponse = axios.get(`${backendUrl}/user/api/protected/userInfo`,{
                    headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json',
                      'Authorization': 'Bearer ' + token
                    }
                  }).then(
                      response => {
                        setUser(
                            {
                              ...user,
                              id: response.data.id,
                              firstName: response.data.firstName,
                              lastName: response.data.lastName,
                              phone: response.data.phone,
                              createdAt: response.data.createdAt,
                              subscription: response.data.subscription,
                              subscription_startDate: response.data.subscription_startDate,
                              subscription_endDate: response.data.subscription_endDate,
                              company_id: response.data.company_id,
                              establishments: response.data.establishments,
                              token: token,
                            }
                        );
                        console.log("id:", response.data.id);
                        console.log("res user:",response.data);
                        console.log("user:", user);
                      }
                  )
                      .catch(error => {
                        console.error('Erreur lors de la requête signin :', error);
                      });
                }
            )
                .catch(error => {
                      console.error('Erreur lors de la requête token :', error);
                    }
                );
          } catch (error) {
            console.error('Erreur lors de la requête au microservice :', error);
          }
        }, [isUserFound]
  );

 */


  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>
          {t("signin")}
        </Text>
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
          <View style={[
              styles.passwordInputContainer,
              emailError && { borderColor: 'red' }
          ]}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Minimum 8 caractères"
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
        </View>
          {passwordError ? (
              <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>
            {t("signin")}
          </Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>
          {t("dont_have_account")}
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate('Inscription')}
          >
            {t("signup")}
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    errorText: {
        color: 'red',
        fontSize: 14,
    },
});

export default SignInScreen;
