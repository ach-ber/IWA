import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import Colors from "../../assets/colors/Colors";

export default function LinkShared({ label, onPress }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
                <Entypo name="chevron-right" size={24} color="#a3a3a3" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        display: 'flex',
        height: 40,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '90%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    buttonIcon: {
        width: "5%",
    },
    buttonLabel: {
        color: Colors.lightGrey.color,
        fontSize: 16,
        width: '95%',
    },
});