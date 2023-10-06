import {View, Text, Image, StyleSheet, ScrollView, Pressable, TouchableOpacity} from "react-native";
import React, { useState} from "react";
import Colors from "../../assets/colors/Colors";
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconAwesome from "react-native-vector-icons/FontAwesome";

export default function AvisAddScreen() {

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

    const [rating, setRating] = useState(0);
    const [ratingText, setRatingText] = useState('');
    const handleStarPress = (starIndex) => {
        const newRating = starIndex + 1;
        setRating(newRating);
        let text = '';
        switch (newRating) {
            case 1:
                text = 'Horrible';
                break;
            case 2:
                text = 'Mauvais';
                break;
            case 3:
                text = 'Moyen';
                break;
            case 4:
                text = 'Bon';
                break;
            case 5:
                text = 'Excellent';
                break;
            default:
                text = '';
        }
        setRatingText(text);
    };
    const stars = [];
    for (let i = 0; i < 5; i++) {
        const isFilled = i < rating;
        stars.push(
            <TouchableOpacity key={i} onPress={() => handleStarPress(i)}>
                <IconAwesome
                    name={isFilled ? 'star' : 'star-o'}
                    size={34}
                    color={Colors.yellowStar.color}
                    style={{ marginRight: 10 }}
                />
            </TouchableOpacity>
        );
    }

    const [avis, setAvis] = useState({
        id: 0,
        nom: "nom",
        prenom: "prenom",
        job: "serveur",
        note: 0,
        date: "",
    });

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

            <Text style={styles.titleFields}>Note</Text>
            <View style={styles.noteContainer}>
                {stars}
                <Text style={{ marginLeft: 20 }}>{ratingText}</Text>
            </View>
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
        alignItems: 'center',
        justifyContent: 'flex-start',
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
    },
    titleFields:{
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
        textAlign: 'left',
        color: Colors.darkGrey.color,
        fontWeight: 'bold',
    }
});