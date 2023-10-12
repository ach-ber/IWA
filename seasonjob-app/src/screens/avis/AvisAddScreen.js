import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import Colors from "../../assets/colors/Colors";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import ButtonShared from "../../shared/buttons/ButtonShared";
import { Input } from '@ui-kitten/components';
import i18n from "../../localization/i18n";


export default function AvisAddScreen() {

    const [rating, setRating] = useState(0);
    const [ratingText, setRatingText] = useState('');
    const [titre, setTitre] = React.useState('');
    const [commentaire, setCommentaire] = React.useState('');
    const [titreError, setTitreError] = React.useState('');
    const [commentaireError, setCommentaireError] = React.useState('');
    const [titreTouched, setTitreTouched] = React.useState(false);
    const [commentaireTouched, setCommentaireTouched] = React.useState(false);

    const validateTitre = () => {
        if (titreTouched && titre.length === 0) {
            setTitreError(i18n.t("errorInput.required"));
        }
        else if (titreTouched && titre.length < 8) {
            setTitreError(i18n.t("errorInput.length", { min: "8" }));
        } else {
            setTitreError('');
        }
    };

    useEffect(() => {
        if (titreTouched) {
            validateTitre();
        }
    }, [titre, titreTouched]);

    const validateCommentaire = () => {
        if (commentaireTouched && commentaire.length === 0) {
            setCommentaireError(i18n.t("errorInput.required"));
        }
        else if (commentaireTouched && commentaire.length < 20) {
            setCommentaireError(i18n.t("errorInput.length", { min: "20" }));
        } else {
            setCommentaireError('');
        }
    }

    useEffect(() => {
        if (commentaireTouched) {
            validateCommentaire();
        }
    }, [commentaire, commentaireTouched]);

    const handleStarPress = (starIndex) => {
        const newRating = starIndex + 1;
        setRating(newRating);
        let text = '';
        switch (newRating) {
            case 1:
                text = i18n.t("textNote.horrible")
                break;
            case 2:
                text = i18n.t("textNote.awful")
                break;
            case 3:
                text = i18n.t("textNote.medium")
                break;
            case 4:
                text = i18n.t("textNote.good")
                break;
            case 5:
                text = i18n.t("textNote.excellent")
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
            </View>

            <Text style={styles.titleFields}>{i18n.t("note")}</Text>
            <View style={styles.noteContainer}>
                {stars}
                <Text style={{ marginLeft: 20 }}>{ratingText}</Text>
            </View>
            {rating!=0&&(
                <View>
                    <Text style={styles.titleFields}>{i18n.t("title")}</Text>
                    <Input
                        placeholder='Titre'
                        value={titre}
                        onChangeText={nextValue => setTitre(nextValue)}
                        onBlur={() => setTitreTouched(true)}
                        status={titreError !== '' ? 'danger' : 'basic'}
                    />
                    <Text style={[styles.errorInput, titreTouched && titreError !== '' ? { opacity: 1 } : { opacity: 0 }]}>
                        {titreError}
                    </Text>

                    <Text style={styles.titleFields}>{i18n.t("comment")}</Text>
                    <Input
                        placeholder='Commentaire'
                        value={commentaire}
                        onChangeText={nextValue => setCommentaire(nextValue)}
                        multiline={true}
                        textStyle={styles.inputTextStyle}
                        onBlur={() => setCommentaireTouched(true)}
                        status={commentaireError !== '' ? 'danger' : 'basic'}
                    />
                    <Text style={[styles.errorInput, commentaireTouched && commentaireError !== '' ? { opacity: 1 } : { opacity: 0 }]}>
                        {commentaireError}
                    </Text>
                    <View style={styles.buttonContainer}>
                        <ButtonShared label="Publier" color="white" backgroundColor={Colors.darkGrey.color} borderColor={Colors.darkGrey.color} onPress={() => alert('You pressed a button.')} />
                    </View>
                </View>
            )}
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
    },
    inputTextStyle: {
        minHeight: 64,
    },
    errorInput: {
        color: 'red',
        height: 20,
        width: '100%',
        fontSize: 12,
        marginTop: 5,
    },
    buttonContainer:{
        width: "100%",
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    }
});