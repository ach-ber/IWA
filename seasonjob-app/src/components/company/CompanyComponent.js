import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CompanyComponent = ({ item, onPress }) => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(item.id)}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        paddingVertical: 22,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#eaeaea',
        borderRadius: 4,
        marginBottom: 16,
    },
});

export default CompanyComponent;
