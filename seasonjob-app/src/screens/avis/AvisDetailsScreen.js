import {View, Text, Image, StyleSheet, ScrollView, Pressable} from "react-native";
import React, {useEffect, useState} from "react";
import Colors from "../../assets/colors/Colors";
import IconAwesome5 from 'react-native-vector-icons/FontAwesome5';
import RatingStars from "../../utils/RatingStars";
import {MenuItem, OverflowMenu} from "@ui-kitten/components";
import i18n from "../../localization/i18n";

export default function AvisDetailsScreen({ route }) {

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

    const renderToggleButton = () => (
        <Pressable style={styles.modifierContainer}  onPress={() => setVisible(true)} >
            <IconAwesome5  name="ellipsis-v" size={24} color='black'  />
        </Pressable>
    );

    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const [visible, setVisible] = React.useState(false);

    const onItemSelect = (index) => {
        setSelectedIndex(index);
        setVisible(false);
    };


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

                    <OverflowMenu
                        anchor={renderToggleButton}
                        visible={visible}
                        onSelect={onItemSelect}
                        onBackdropPress={() => setVisible(false)}
                    >
                        <MenuItem title={i18n.t("modificate")} />
                        <MenuItem title={i18n.t("delete")} />
                    </OverflowMenu>
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