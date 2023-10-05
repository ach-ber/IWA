import React, { useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import getDateFormat from '../../utils/getDateFormat';
import i18n from '../../localization/i18n';

const OfferDetailsScreen = () => {
    const [establishment, setEstablishment] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    const [jobName, setJobName] = useState('');
    const [perks, setPerks] = useState('');
    const [salary, setSalary] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleStartDateChange = (event, selectedDate) => {
        if (selectedDate) {
            setStartDate(selectedDate);
        }
    };

    const handleEndDateChange = (event, selectedDate) => {
        if (selectedDate) {
            setEndDate(selectedDate);
        }
    };

    const [establishments, setEstablishments] = useState([
        'McDonald\'s',
        'Quick',
        'KFC',
        'Burger King',
        'Subway'
    ]);
    const [jobCategories, setJobCategories] = useState([
        'Cuisinier',
        'Serveur',
        'Plongeur',
        'Caissier',
        'Livreur'
    ]);

    const handleSubmit = () => {
        console.log('Établissement :', establishment);
        console.log('Catégorie :', jobCategory);
        console.log('Nom de l\'emploi :', jobName);
        console.log('Avantages :', perks);
        console.log('Salaire :', salary);
        console.log('Date de début :', startDate);
        console.log('Date de fin :', endDate);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <Text style={styles.label}>
                        {i18n.t('jobName')}
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={jobName}
                        onChangeText={setJobName}
                    />

                    <Text style={styles.label}>
                        {i18n.t('establishment')}
                    </Text>

                    <Text style={styles.label}>
                        {i18n.t('jobCategory')}
                    </Text>

                    <Text style={styles.label}>
                        {i18n.t('perks')}
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={perks}
                        onChangeText={setPerks}
                        multiline={true}
                    />

                    <Text style={styles.label}>
                        {i18n.t('salary')}
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={salary}
                        onChangeText={setSalary}
                        keyboardType="numeric"
                        placeholder='€'
                    />

                    <Text style={styles.label}>
                        {i18n.t('startDate')}
                    </Text>
                    <DateTimePicker
                        testID="startDatePicker"
                        value={startDate}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={handleStartDateChange}
                        style={{ alignSelf: 'flex-start', marginBottom: 16, marginTop: 16 }}
                    />

                    <Text style={styles.label}>
                        {i18n.t('endDate')}
                    </Text>
                    <DateTimePicker
                        testID="endDatePicker"
                        value={endDate}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={handleEndDateChange}
                        style={{ alignSelf: 'flex-start', marginBottom: 16, marginTop: 16 }}
                    />

                    <View>
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>
                            {i18n.t("post")}
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 4,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
        width: '100%',
    },
    datePicker: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
        width: '100%',
    },
    button: {
        width: '100%',
        backgroundColor: '#66CA98',
        borderRadius: 4,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 16,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default OfferDetailsScreen;
