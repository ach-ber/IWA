// simple class that displays a text then a number inside a box
import { Text, View, StyleSheet } from 'react-native';

const InfoBox = ({ text, number }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{text}</Text>
            <View style={styles.number}>
                <Text style={styles.numberText}>{number}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        padding: 10,
    },
    title: {
        color: "grey",
        textAlign: 'center',
    },
    number: {
        backgroundColor: 'lightgrey',
        borderRadius: 10,
        width: 80,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        textAlign: "center",
        textAlignVertical: "center",
    },
    numberText: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default InfoBox;
