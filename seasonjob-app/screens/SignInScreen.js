import React from 'react';
import { View, Text, Button } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const navigateToSignUp = () => {
    navigation.navigate('SignUp'); // Navigate to the SignUp screen
  };

  return (
    <View>
      <Text>Sign In Screen</Text>
      <Button title="Sign Up" onPress={navigateToSignUp} />
    </View>
  );
};

export default SignInScreen;
