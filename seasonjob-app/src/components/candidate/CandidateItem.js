import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import Colors from "../../assets/colors/Colors";
import React from "react";

export default function CandidateItem({navigation,nom,prenom,job,onPress,date}) {

    const navigateAddAvis = (avis) => {
        navigation.navigate('AvisAdd');
    };

    return (
        <Pressable style={styles.itemContainer} onPress={onPress}>
            <View style={styles.imageContainer}>
                <Image src="" style={styles.image} />
            </View>
            <View style={styles.candidatContainer}>
                <Text style={styles.candidatInfo}>{nom} {prenom}</Text>
                <Text>{job}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.date}>{date}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        width: "100%",
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        marginBottom: 10,
    },
    imageContainer: {
        width: "30%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 100,
        backgroundColor: 'grey'
    },
    candidatContainer: {
        width: "40%",
        height: "100%",
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    candidatInfo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.darkGrey.color,
    },
    rightContainer: {
        width: "30%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
    },
    date: {
        fontSize: 12,
        textAlign: 'left',
        color: Colors.lightGrey.color,
    }
});
