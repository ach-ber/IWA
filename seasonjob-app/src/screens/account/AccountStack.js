import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from "./ProfileScreen";
import FormuleScreen from "./FormuleScreen";
import EditProfileScreen from "./EditProfileScreen";
import EstablishmentListScreen from "../account/EstablishmentListScreen";
import EstablishmentDetailsScreen from "../establishment/EstablishmentDetailsScreen";
import CompanyScreen from "./CompanyScreen";
import EditCompany from "./EditCompanyScreen";
import EditEstablishmentScreen from "./EditEstablishmentScreen";

const Stack = createNativeStackNavigator();

export default function AccountStack() {
    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false, gestureEnabled: true }} />
            <Stack.Screen name="Formule" component={FormuleScreen} options={{ headerShown: false, gestureEnabled: true }} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false, gestureEnabled: true }} />
            <Stack.Screen name="EtablishmentList" component={EstablishmentListScreen} options={{ headerShown: false, gestureEnabled: true }} />
            <Stack.Screen name="EtablishmentDetails" component={EstablishmentDetailsScreen} options={{ headerShown: false, gestureEnabled: true }} />
            <Stack.Screen name="Company" component={CompanyScreen} options={{ headerShown: false, gestureEnabled: true }} />
            <Stack.Screen name="EditCompany" component={EditCompany} options={{ headerShown: false, gestureEnabled: true }} />
            <Stack.Screen name="EditEstablishment" component={EditEstablishmentScreen} options={{ headerShown: false, gestureEnabled: true }} />
        </Stack.Navigator>
    );
}
