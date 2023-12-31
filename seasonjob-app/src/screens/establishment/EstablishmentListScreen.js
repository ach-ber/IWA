import React from 'react';
import { View, StyleSheet } from 'react-native';

import SmallButton from '../../shared/buttons/SmallButton';
import EstablishmentList from '../../components/establishment/EstablishmentList';

import i18n from "../../localization/i18n"
import TopBar from '../../shared/TopBar';

const EstablishmentListScreen = ({ navigation }) => {

  const handleSort = () => {
    console.log("sort")
  };

  const handlePlus = () => {
    console.log("plus")
  };

  const handleEstablishment = (item) => {
    navigation.navigate("EstablishmentDetails", { establishment: item })
  };

  const itemsExample = [
    {
      id: 0,
      name: "Établissement 1",
      address: "12 rue du Moulins, 34000 Montpellier",
      numJobs: 3,
      numEmployees: 5,
      pastOffers: 2,
    }, {
      id: 1,
      name: "Établissement 2",
      address: "Rue du Truel, 34000 Montpellier",
      numJobs: 2,
      numEmployees: 10,
      pastOffers: 0,
    }, {
      id: 2,
      name: "Établissement 3",
      address: "Rue de l'université, 34000 Montpellier",
      numJobs: 5,
      numEmployees: 6,
      pastOffers: 1,
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <TopBar title={i18n.t("my_establishments")} handlePlus={handlePlus} />
        <SmallButton onPress={handleSort} text={i18n.t("sort")} />
        <EstablishmentList onPress={handleEstablishment} items={itemsExample} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
  },
  topSection: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
  },
});

export default EstablishmentListScreen;
