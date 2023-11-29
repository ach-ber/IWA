import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AvisListScreen from "./AvisListScreen";
import AvisDetailsScreen from "./AvisDetailsScreen";
import AvisAddScreen from "./AvisAddScreen";
import AvisSelectionListScreen from "./AvisSelectionListScreen";
const Stack = createNativeStackNavigator();

export default function AvisStack() {
    return (
        <Stack.Navigator initialRouteName="AvisSelectionListScreen">
            <Stack.Screen name="AvisList" component={AvisListScreen} options={{ headerShown: false, gestureEnabled: true }} />
            <Stack.Screen name="AvisDetails" component={AvisDetailsScreen} options={{ headerShown: true, gestureEnabled: true }} />
            <Stack.Screen name="AvisAdd" component={AvisAddScreen} options={{ headerShown: true, gestureEnabled: true }} />
            <Stack.Screen name="AvisSelectionListScreen" component={AvisSelectionListScreen} options={{ headerShown: false, gestureEnabled: true }} />
        </Stack.Navigator>
    );
}
