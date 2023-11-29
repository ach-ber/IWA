import {StyleSheet, View} from "react-native";
import CandidateItem from "./CandidateItem";

export default function CandidateList({Candidates,onPress,navigation}) {
    return (
        <View style={styles.listContainer}>
            {Candidates.map(candidate => (<CandidateItem navigation={navigation} key={candidate.id} onPress={() => onPress()} prenom={candidate.prenom} nom={candidate.nom} job={candidate.job} date={candidate.date} />))}
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        marginTop: 10
    }
});
