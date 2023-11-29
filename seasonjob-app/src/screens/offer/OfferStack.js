import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OfferDetailsScreen from "./OfferDetailsScreen";
import OfferListScreen from './OfferListScreen';
import OfferCandidatesScreen from './OfferCandidatesScreen';

import t from '../../utils/translation';

const Stack = createNativeStackNavigator();

export default function OfferStack() {
    return (
        <Stack.Navigator initialRouteName="Offer">
            <Stack.Screen name="OfferList" component={OfferListScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="OfferDetails" component={OfferDetailsScreen} options={{ headerTitle: t('offer_details') }} />
            <Stack.Screen name="OfferCandidates" component={OfferCandidatesScreen} options={{ headerTitle: t('offer_details') }} />
        </Stack.Navigator>
    );
}


