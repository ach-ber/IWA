import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CandidateScreen from './CandidateScreen';
import AvisDetailsScreen from '../avis/AvisDetailsScreen';

const Stack = createNativeStackNavigator();

export default function CandidateStack() {
    return (
        <Stack.Navigator initialRouteName="CandidateDetails">
            <Stack.Screen name="CandidateDetails" component={CandidateScreen} options={{ headerShown: false, gestureEnabled: true }} />
            <Stack.Screen name="AvisDetails" component={AvisDetailsScreen} options={{ headerShown: true, gestureEnabled: true }} />
        </Stack.Navigator>
    );
}
