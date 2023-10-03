import React from 'react';
import { View, Text, Button } from 'react-native';

import i18n from "../../localization/i18n"

const SignUpScreen = ({ navigation }) => {
  const navigateToSignIn = () => {
    navigation.navigate('SignIn'); // Navigate to the SignIn screen
  };

  return (
    <View>
      <Text>{i18n.t("signup_screen")}</Text>
      <Button title={i18n.t("signin")} onPress={navigateToSignIn} />
    </View>
  );
};

export default SignUpScreen;
