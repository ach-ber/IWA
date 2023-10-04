import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from "./ProfileScreen";
import FormuleScreen from "./FormuleScreen";

const Stack = createNativeStackNavigator();

export default function AccountStack() {
    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false, gestureEnabled: true }} />
            <Stack.Screen name="Formule" component={FormuleScreen} options={{ headerShown: false, gestureEnabled: true }} />
        </Stack.Navigator>
    );
}
