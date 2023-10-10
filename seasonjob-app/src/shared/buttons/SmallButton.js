import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SortButton = ({ onPress, text, style = {backgroundColor: '#66CA98'} }) => {
    return (
        <TouchableOpacity style={{...styles.sortButton, ...style}} onPress={onPress}>
            <Text style={styles.sortButtonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    sortButton: {
        width: '35%',
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