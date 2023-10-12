import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../../assets/colors/Colors';

const SortButton = ({ onPress, text, style = {backgroundColor: Colors.green.color} }) => {
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
        marginVertical: 8,
        marginHorizontal: 16,
    },
    sortButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SortButton;