import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SortButton = ({ onPress, text }) => {
    return (
        <TouchableOpacity style={styles.sortButton} onPress={onPress}>
            <Text style={styles.sortButtonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    sortButton: {
        width: '35%',
        backgroundColor: '#66CA98',
        borderRadius: 4,
        paddingVertical: 12,
        alignItems: 'center',
    },
    sortButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SortButton;