import { View, StyleSheet } from 'react-native';

import EstablishmentItem from './EstablishmentItem';

const EstablishmentList = ({ items, onPress }) => {
  return (
    <View style={styles.listContainer}>
      {items.map(item => (<EstablishmentItem key={item.id} onPress={() => onPress(item)} name={item.name} address={item.address} numJobs={item.numJobs} />))}
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: "10",
    marginTop: 10
  }
});

export default EstablishmentList;
