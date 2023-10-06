import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OfferDetailsScreen from "./OfferDetailsScreen";

const Stack = createNativeStackNavigator();

export default function OfferStack() {
    return (
        <Stack.Navigator initialRouteName="Offer">
            <Stack.Screen name="OfferDetails" component={OfferDetailsScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}


