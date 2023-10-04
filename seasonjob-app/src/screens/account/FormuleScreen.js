import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Colors from '../../assets/colors/Colors';
import FormuleComponent from "../../components/Formule/FormuleComponent";
import i18n from "../../localization/i18n";

const FormuleScreen = () => {
    const descriptionFree = [i18n.t("formula_descr.limited_candidate"),i18n.t("formula_descr.simple_profile")];
    const descriptionSilver = [i18n.t("formula_descr.limited_candidate"),i18n.t("formula_descr.full_profile")];
    const descriptionGold = [i18n.t("formula_descr.unlimited_candidate"),i18n.t("formula_descr.full_profile")];
    const descriptionPlatinum = [i18n.t("formula_descr.unlimited_candidate"),i18n.t("formula_descr.full_profile"),i18n.t("formula_descr.messaging"),i18n.t("formula_descr.job_offers")];
    const [selected,setSelected] = useState([true,false,false,false])
    const changeSelected = (index) => {
        let newSelected = [false,false,false,false];
        newSelected[index] = true;
        setSelected(newSelected);
        alert("selected : " + index + " value : " + selected[index] )
    }

    return (
        <ScrollView style={styles.scrollView}>
            <SafeAreaView >
                <View>
                    <FormuleComponent
                        title={i18n.t("formula_option.free")}
                        description={descriptionFree}
                        price={i18n.t("price_formula_free")}
                        date={i18n.t("renewal",{date:"10-09-2023"})}
                        backgroundColor="grey"
                        borderColor={Colors.borderGrey.color}
                        onPress={() => changeSelected(0)}
                        selected={selected[0]}
                    />
                    <FormuleComponent
                        title={i18n.t("formula_option.silver")}
                        description={descriptionSilver}
                        price={i18n.t("price_formula",{price:"5"})}
                        date={i18n.t("renewal",{date:"10-09-2023"})}
                        backgroundColor="grey"
                        borderColor={Colors.borderGrey.color}
                        onPress={() => changeSelected(1)}
                        selected={selected[1]}
                    />
                    <FormuleComponent
                        title={i18n.t("formula_option.gold")}
                        description={descriptionGold}
                        price={i18n.t("price_formula",{price:"12"})}
                        date={i18n.t("renewal",{date:"10-09-2023"})}
                        backgroundColor="grey"
                        borderColor={Colors.borderGrey.color}
                        onPress={() => changeSelected(2)}
                        selected={selected[2]}
                    />
                    <FormuleComponent
                        title={i18n.t("formula_option.platinum")}
                        description={descriptionPlatinum}
                        price={i18n.t("price_formula",{price:"25"})}
                        date={i18n.t("renewal",{date:"10-09-2023"})}
                        backgroundColor="grey"
                        borderColor={Colors.borderGrey.color}
                        onPress={() => changeSelected(3)}
                        selected={selected[3]}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        width: '90%',
        marginTop: 20,
        borderRadius: 10,
        marginHorizontal: "5%",
        height: '100%',
        backgroundColor: "white",
        display: 'flex',
        flexDirection: 'column',
    },
});
export default FormuleScreen;
