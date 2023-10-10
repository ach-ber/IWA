import React, { useState } from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Platform,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import { Datepicker, Select, Text, SelectItem } from '@ui-kitten/components';

import t from '../../utils/translation';

const OfferDetails = ({ id }) => {
    const [establishment, setEstablishment] = useState('');
    const [jobCategory, setJobCategory] = useState('');
    const [jobName, setJobName] = useState('');
    const [perks, setPerks] = useState('');
    const [salary, setSalary] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

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
                        {t('jobName')}
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={jobName}
                        onChangeText={setJobName}
                    />
                    
                    <Text style={styles.label}>
                        {t('establishment')}
                    </Text>
                    <Select
                        selectedIndex={establishment}
                        placeholder={t('selectEstablishment')}
                        onSelect={index => setEstablishment(establishments[index])}
                        style={styles.select}
                    >
                        {
                            establishments.map((establishment, index) => (
                                <SelectItem key={index} title={establishment} />
                            ))
                        }
                    </Select>

                    <Text style={styles.label}>
                        {t('jobCategory')}
                    </Text>
                    <Select
                        selectedIndex={jobCategory}
                        placeholder={t('selectJobCategory')}
                        onSelect={index => setJobCategory(jobCategories[index])}
                        style={styles.select}
                    >
                        {
                            jobCategories.map((category, index) => (
                                <SelectItem key={index} title={category} />
                            ))
                        }
                    </Select>

                    <Text style={styles.label}>
                        {t('perks')}
                    </Text>
                    <TextInput
                        style={styles.inputTextArea}
                        value={perks}
                        onChangeText={setPerks}
                        multiline={true}
                    />

                    <Text style={styles.label}>
                        {t('salary')}
                    </Text>
                    <TextInput
                        style={styles.input}
                        value={salary}
                        onChangeText={setSalary}
                        keyboardType="numeric"
                        placeholder='€'
                    />

                    <Text style={styles.label}>
                        {t('startDate')}
                    </Text>
                    <Datepicker
                        date={startDate}
                        onSelect={nextDate => setStartDate(nextDate)}
                    />

                    <Text style={styles.label}>
                        {t('endDate')}
                    </Text>
                    <Datepicker
                        date={endDate}
                        onSelect={nextDate => setEndDate(nextDate)}
                    />

                    <View>
                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>
                            {t("post")}
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
        marginTop: 16,
    },
    select: {
        backgroundColor: 'white',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        width: '100%',
        backgroundColor: 'white',
    },
    inputTextArea: {
        minHeight: 64,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        width: '100%',
        backgroundColor: 'white',
    },
    datePicker: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        width: '100%',
    },
    button: {
        width: '100%',
        backgroundColor: '#66CA98',
        borderRadius: 4,
        paddingVertical: 12,
        alignItems: 'center',
        marginTop: 32,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default OfferDetails;
