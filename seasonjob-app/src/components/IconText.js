import { createElement } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const IconText = ({ iconClass, iconName, text, iconColor = {color: 'black'}, textStyle = {color: 'black'} }) => {
    const icon = createElement(iconClass, { name: iconName, size: 15, color: iconColor })
    return (
        <View style={styles.container}>
            {icon}
            <Text style={textStyle} >{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
});

export default IconText;
