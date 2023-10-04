import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import PlusButton from '../../components/Buttons/PlusButton';
import EstablishmentList from '../../components/Establishment/EstablishmentList';

import i18n from "../../localization/i18n"

const EstablishmentScreen = ({ navigation }) => {

  const handleSort = () => {
    console.log("sort")
  };

  const handlePlus = () => {
    console.log("plus")
  };

  const handleEstablishment = () => {
    console.log("establishment")
  };

  const itemsExample = [
    {
      name: "Établissement 1",
      address: "12 rue du Moulins, 34000 Montpellier",
      numJobs: 3,
    }, {
      name: "Établissement 2",
      address: "Rue du Truel, 34000 Montpellier",
      numJobs: 2,
    }, {
      name: "Établissement 3",
      address: "Rue de l'université, 34000 Montpellier",
      numJobs: 5,
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.establishmentBar}>
          <Text style={styles.title}>{i18n.t("my_establishments")}</Text>
          <PlusButton onPress={handlePlus} />
        </View>
        <TouchableOpacity style={styles.sortButton} onPress={handleSort}>
          <Text style={styles.sortButtonText}>{i18n.t("sort")}</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 32,
    marginTop: 32,
  },
  establishmentBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
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

export default EstablishmentScreen;
