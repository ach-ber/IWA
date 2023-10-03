import React from 'react';
import { View, Text, Button } from 'react-native';

import i18n from "../../localization/i18n"

const SignInScreen = ({ navigation }) => {
  const navigateToSignUp = () => {
    navigation.navigate('SignUp'); // Navigate to the SignUp screen
  };

  return (
    <View>
      <Text>{i18n.t("signin_screen")}</Text>
      <Button title={i18n.t("signup")} onPress={navigateToSignUp} />
    </View>
  );
};

export default SignInScreen;
