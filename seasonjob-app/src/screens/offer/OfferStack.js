import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OfferDetailsScreen from "./OfferDetailsScreen";
import OfferListScreen from './OfferListScreen';

const Stack = createNativeStackNavigator();

export default function OfferStack() {
    return (
        <Stack.Navigator initialRouteName="Offer">
            <Stack.Screen name="OfferList" component={OfferListScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="OfferDetails" component={OfferDetailsScreen}  />
        </Stack.Navigator>
    );
}


