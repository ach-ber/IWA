import React, { useState } from 'react';

import OfferList from '../../components/offer/OfferList';

const OfferListScreen = ({ navigation }) => {

    const [offerList, setOfferList] = useState([
        {
            id: 1,
            title: 'Offre 1',
            period: 'Eté 2024',
            contract: 'Temps plein',
            salary: '1000',
            candidates: [
                {
                    id: 1,
                    firstName: 'Jean',
                    lastName: 'Dupont',
                    rating: 4,
                    job: 'Serveur',
                    nbReviews: 10,
                },
                {
                    id: 2,
                    firstName: 'Paul',
                    lastName: 'Dumas',
                    rating: 3.5,
                    job: 'Caissier',
                    nbReviews: 6,
                },
            ],
        },
        {
            id: 2,
            title: 'Offre 2',
            period: 'Hiver 2024',
            contract: 'Mi-temps',
            salary: '2000',
            candidates: [
                {
                    id: 1,
                    firstName: 'Jean',
                    lastName: 'Dupont',
                    rating: 4,
                    job: 'Serveur',
                    nbReviews: 10,
                },
                {
                    id: 2,
                    firstName: 'Paul',
                    lastName: 'Dumas',
                    rating: 3.5,
                    job: 'Caissier',
                    nbReviews: 6,
                },
            ],
        },
    ]);

    return (
        <OfferList navigation={navigation} list={offerList} />
    )
};

export default OfferListScreen;
