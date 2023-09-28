import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SignUpScreen = ({ navigation }) => {

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {
    if (!fullName) {
      setFullNameError("Veuillez entrer votre nom complet");
    } else {
      setFullNameError("");
    }

    if (!email) {
      setEmailError("Veuillez entrer votre adresse e-mail");
    } else if (!validateEmail(email)) {
      setEmailError("Veuillez corriger le format d’email");
    } else {
      setEmailError("");
    }

    if (!password || password.length < 8) {
      setPasswordError("Le mot de passe doit contenir au moins 8 caractères");
    } else {
      setPasswordError("");
    }

    if (fullName && email && password && password.length >= 8) {
      // créer le compte
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>S'inscrire</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nom complet</Text>
          <TextInput
            style={[
              styles.input,
              fullNameError && { borderColor: 'red' }
            ]}
            placeholder="Jan Kowalski"
            autoCapitalize="words"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />
          {fullNameError ? (
            <Text style={styles.errorText}>{fullNameError}</Text>
          ) : null}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Adresse e-mail</Text>
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
          <Text style={styles.label}>Mot de passe</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={[
                styles.passwordInput,
                passwordError && { borderColor: 'red' }
              ]}
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
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}
        </View>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>
          Vous avez déjà un compte ?{' '}
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate('Connexion')}
          >
            Se connecter
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
  errorText: {
    color: 'red',
    fontSize: 14,
  },
});

export default SignUpScreen;
