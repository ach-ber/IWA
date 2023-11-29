import { StyleSheet, View } from 'react-native';
import EstablishmentJobOffer from './EstablishmentJobOffer';

const JobOfferList = ({ items, onPress }) => {
    return (
        <View style={styles.container}>
            {items.map(item => (<EstablishmentJobOffer key={item.id} onPress={() => onPress(item)} title={item.title} period={item.period} salary={item.salary} workSchedule={item.workSchedule} numMatches={item.numMatches} />))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        gap: 10,
    },
});

export default JobOfferList;
