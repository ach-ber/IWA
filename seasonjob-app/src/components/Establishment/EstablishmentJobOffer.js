import { Text, View, StyleSheet } from 'react-native';

import Colors from '../../assets/colors/Colors';

import IconText from '../../components/IconText';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

import i18n from '../../localization/i18n';

const EstablishmentJobOffer = ({ title, period, workSchedule, salary, numMatches }) => {

    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                {(numMatches > 0 ?
                    <View style={styles.numMatchesContainer}>
                        <Text style={styles.numMatches}>{i18n.t("match", { count: numMatches })}</Text>
                    </View> : null)}
            </View>

            <View style={styles.info}>
                <IconText iconClass={Icon} iconName="calendar" text={period} />
                <IconText iconClass={Icon5} iconName="clock" text={workSchedule} />
                <IconText iconClass={Icon} iconName="dollar" text={i18n.t("salaryPerMonth", { salary })} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.lightBlue.color,
        borderRadius: 4,
        padding: 10,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    info: {
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
    },
    numMatchesContainer: {
        backgroundColor: Colors.red2.color,
        width: 100,
        borderRadius: 30,
        padding: 5,
        alignSelf: 'flex-end',
    },
    numMatches: {
        textAlign: 'center',
    }
});

export default EstablishmentJobOffer;
