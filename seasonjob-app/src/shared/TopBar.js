import { View, Text, StyleSheet } from 'react-native';

import PlusButton from './buttons/PlusButton';

const TopBar = ({ title, handlePlus }) => {
    return (
        <View style={styles.establishmentBar}>
            <Text style={styles.title}>{title}</Text>
            <PlusButton onPress={handlePlus} />
        </View>
    );
}

const styles = StyleSheet.create({
    establishmentBar: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 32,
        marginTop: 32,
        marginLeft: 16,
    },
});

export default TopBar;
