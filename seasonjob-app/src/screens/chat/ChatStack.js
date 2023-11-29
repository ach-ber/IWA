import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatHomeScreen from './ChatHomeScreen';

import t from '../../utils/translation';

const Stack = createNativeStackNavigator();

export default function ChatStack() {
    return (
        <Stack.Navigator initialRouteName="Chat">
            <Stack.Screen name="ChatHome" component={ChatHomeScreen} options={{ headerTitle: t("chat") }} />
        </Stack.Navigator>
    )
}


