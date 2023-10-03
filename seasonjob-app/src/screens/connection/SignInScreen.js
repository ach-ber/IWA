import React from 'react';
import { View, Text, Button } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const navigateToSignUp = () => {
    navigation.navigate('SignUp'); // Navigate to the SignUp screen
  };
  const navigateToAccount = () => {
    navigation.navigate('Account'); // Navigate to the Account screen
  }

  return (
    <View>
      <Text>Sign In Screen</Text>
        <Button title="Account" onPress={navigateToAccount} />
    </View>
  );
};

export default SignInScreen;
