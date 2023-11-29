import { StyleSheet, View } from 'react-native';

import i18n from '../../localization/i18n';
import InfoBox from '../InfoBox';

const EstablishmentEmployeesDetails = ({ numEmployees, numJobs, numPastOffers }) => {
    return (
        <View style={styles.container}>
          <InfoBox text={i18n.t("employees")} number={numEmployees} />
          <InfoBox text={i18n.t("offers")} number={numJobs} />
          <InfoBox text={i18n.t("past_offers")} number={numPastOffers} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
});

export default EstablishmentEmployeesDetails;
