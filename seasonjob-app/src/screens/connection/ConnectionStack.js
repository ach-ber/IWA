import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';

const Stack = createNativeStackNavigator();

export default function ConnectionStack() {
    return (
        <Stack.Navigator initialRouteName="Connection">
            <Stack.Screen name="Connexion" component={SignInScreen} options={{ headerShown: false, gestureEnabled: true }} />
            <Stack.Screen name="Inscription" component={SignUpScreen} options={{ headerShown: false, gestureEnabled: true }} />
        </Stack.Navigator>
    );
}
