import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EstablishmentDetailsScreen from "./EstablishmentDetailsScreen";
import EstablishmentListScreen from "./EstablishmentListScreen";

const Stack = createNativeStackNavigator();

export default function EstablismentStack() {
    return (
        <Stack.Navigator initialRouteName="EstablishmentList">
            <Stack.Screen name="EstablishmentList" component={EstablishmentListScreen} options={{ headerShown: false, gestureEnabled: true }} />
            <Stack.Screen name="EstablishmentDetails" component={EstablishmentDetailsScreen} options={{ headerShown: false, gestureEnabled: true }} />
        </Stack.Navigator>
    );
}
