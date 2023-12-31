import { View, Text, StyleSheet } from 'react-native';

import i18n from "../../localization/i18n";
import Colors from "../../assets/colors/Colors";

import EstablishmentEmployeesDetails from '../../components/establishment/EstablishmentEmployeesDetails';
import JobOfferList from '../../components/establishment/JobOfferList';

const EstablishmentDetailsScreen = ({ route }) => {
  const { establishment } = route.params;

  const handleJobOffer = (item) => {
    console.log("joboffer", item)
  };

  const itemsExample = [
    { id: 0, title: "Moniteur de ski", period: "Hiver 2023", salary: 1700, workSchedule: i18n.t("fulltime"), numMatches: 2 },
    { id: 1, title: "Serveur", period: "Été 2024", salary: 1600, workSchedule: i18n.t("fulltime"), numMatches: 1 },
    { id: 2, title: "Chef de rang", period: "Été 2024", salary: 2000, workSchedule: i18n.t("fulltime"), numMatches: 0 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.establishmentBar}>
          <Text style={styles.title}>{establishment.name}</Text>
        </View>
        <Text style={styles.address}>{establishment.address}</Text>

        <EstablishmentEmployeesDetails numEmployees={establishment.numEmployees} numJobs={establishment.numJobs} numPastOffers={establishment.pastOffers} />

        <View style={{ marginTop: 10 }}>
          <Text style={styles.jobOffersText}>{i18n.t("offers_associated_with_establishment")}</Text>
          <JobOfferList items={itemsExample} onPress={handleJobOffer}/>
        </View>
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
  establishmentBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 32,
  },
  address: {
    fontSize: 14,
    color: "grey",
  },
  establishmentEmployeesInfo: {
    backgroundColor: Colors.lightGrey.color,
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
  },
  jobOffersText: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default EstablishmentDetailsScreen;
