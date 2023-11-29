import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

import t from "../../utils/translation"

const ChatHomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.incomingText}>{t("exciting")}</Text>
                <Text style={styles.description}>{t("exciting_chat_description")}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    incomingText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    content: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    incomingText: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
        color: '#666666',
        lineHeight: 22,
    },
});

export default ChatHomeScreen;
