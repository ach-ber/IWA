import { Pressable, View, StyleSheet, Image, Text } from "react-native";
import Colors from "../../assets/colors/Colors";
import IconAwesome from 'react-native-vector-icons/FontAwesome';
import React from "react";
import RatingStars from "../../utils/RatingStars";

export default function AvisItem({ avis, onpress }) {

    return avis.note ? (
        <Pressable style={styles.avisContainer} onPress={onpress}>
            <View style={styles.imageContainer}>
                <Image src="" style={styles.image} />
            </View>
            <View style={styles.candidatContainer}>
                <Text style={styles.candidatInfo}>{avis.nom} {avis.prenom}</Text>
                <Text>{avis.job}</Text>
            </View>
            <View style={styles.rightContainer}>
                <RatingStars rating={avis.note} color={Colors.yellowStar.color} size={12} style={styles.noteContainer} />
                <Text style={styles.date}>{avis.date}</Text>
            </View>
        </Pressable>
    ) : (
        <Pressable style={styles.avisContainer} onPress={onpress}>
            <View style={styles.imageContainer}>
                <Image src="" style={styles.image} />
            </View>
            <View style={styles.candidatContainer}>
                <Text style={styles.candidatInfo}>{avis.nom} {avis.prenom}</Text>
                <Text>{avis.job}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text >{avis.date}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    avisContainer: {
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
    noteContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '70%',
    },
    date: {
        fontSize: 12,
        textAlign: 'left',
        color: Colors.lightGrey.color,
    }
});