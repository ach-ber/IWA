import { Pressable, View, StyleSheet, Image, Text } from "react-native";
import Colors from "../../assets/colors/Colors";
import React from "react";
import { A } from "@expo/html-elements";

export default function ReferenceItem({ reference }) {

    return (
        <View style={styles.experienceContainer}>
            <Text style={styles.candidatInfo}>{reference.nomComplet} ({reference.establishment})</Text>
            <View style={styles.referenceContact}>
                <A href={`tel:${reference.phone}`}>{reference.phone}</A>
                <Text> - </Text>
                <A href={`mailto:${reference.email}`}>{reference.email}</A>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    experienceContainer: {
        width: "100%",
        height: 100,
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: 'column',
        backgroundColor: 'white',
        marginBottom: 10,
        paddingLeft: 10,
    },
    candidatInfo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.darkGrey.color,
        marginBottom: 10,
    },
    referenceContact: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
    },
});