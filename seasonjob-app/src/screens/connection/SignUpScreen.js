import React from 'react';
import { View, Text, Button } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const navigateToSignIn = () => {
    navigation.navigate('SignIn'); // Navigate to the SignIn screen
  };

  return (
    <View>
      <Text>Sign Up Screen</Text>
      <Button title="Sign In" onPress={navigateToSignIn} />
    </View>
  );
};

export default SignUpScreen;
