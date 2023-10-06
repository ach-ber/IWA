import {View, Text, Image, StyleSheet, ScrollView, Pressable} from "react-native";
import React, {useEffect, useState} from "react";
import Colors from "../../assets/colors/Colors";
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconAwesome from "react-native-vector-icons/FontAwesome";

export default function AvisDetailsScreen({ route }) {

    const RatingStars = ({ rating, size, color,style }) => {
        const wholeStars = Math.floor(rating / 2);
        const hasHalfStar = rating % 2 !== 0;
        const stars = [];
        for (let i = 0; i < wholeStars; i++) {
            stars.push(
                <IconAwesome name="star" size={size} color={color}  />
            );
        }
        if (hasHalfStar) {
            stars.push(
                <IconAwesome name="star-half-empty" size={size} color={color} />
            );
        }
        while (stars.length < 5) {
            stars.push(
                <IconAwesome name="star-o" size={size} color={color} />
            );
        }
        return (
            <View style={style}>
                {stars}
            </View>
        );
    };

    const [avis, setAvis] = useState({
        id: 0,
        nom: "",
        prenom: "",
        job: "",
        note: 0,
        date: "",
    });

    useEffect(() => {
        if (route.params && route.params.avis) {
            setAvis(route.params.avis)
        }
    }, [route.params]);

    return (
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.topContainer}>
                <View style={styles.imageContainer}>
                    <Image src="" style={styles.image}/>
                </View>
                <View style={styles.condidatContainer}>
                    <Text style={styles.candidatInfo}>{avis.nom} {avis.prenom}</Text>
                    <Text>{avis.job}</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Pressable style={styles.modifierContainer} onPress={() => alert('Pressed')}>
                        <IconAwesome5  name="ellipsis-v" size={24} color='black'  />
                    </Pressable>

                </View>
            </View>
            <RatingStars rating={avis.note} color={Colors.yellowStar.color} size={22} style={styles.noteContainer} />
            <View style={styles.avisContainer}>
                <Text style={styles.date}>{avis.date}</Text>
                <Text style={styles.titre}>{avis.titre}</Text>
                <Text style={styles.avis}>{avis.avis}</Text>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    scrollContainer: {
        width: "80%",
        marginLeft: "10%",
    },
    topContainer:{
        width: "100%",
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    imageContainer: {
        width: "20%",
        height: "100%",
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: 'grey',
    },
    condidatContainer: {
        width: "60%",
        height: "100%",
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft:'10%',
    },
    candidatInfo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.darkGrey.color,
    },
    rightContainer: {
        width: "10%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    modifierContainer: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noteContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: 140,
    },
    date: {
        marginTop: 10,
        fontSize: 12,
        textAlign: 'left',
        color: Colors.lightGrey.color,
    },
    titre: {
        marginTop: 10,
        fontSize: 22,
        textAlign: 'left',
        color: Colors.darkGrey.color,
        fontWeight: 'bold',
    },
    avis: {
        marginTop: 20,
        fontSize: 16,
        textAlign: 'left',
        color: Colors.lightGrey.color,
        lineHeight: 22,
    }
});