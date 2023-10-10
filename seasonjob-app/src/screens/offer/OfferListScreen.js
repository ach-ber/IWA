import React, { useState } from 'react';

import OfferList from '../../components/offer/OfferList';

const OfferListScreen = () => {

    const [offerList, setOfferList] = useState([
        {
            id: 1,
            title: 'Offre 1',
            period: 'Eté 2024',
            contract: 'Temps plein',
            salary: '1000',
        },
        {
            id: 2,
            title: 'Offre 2',
            period: 'Hiver 2024',
            contract: 'Mi-temps',
            salary: '2000',
        },
    ]);

    return (
        <OfferList list={offerList} />
    )
};

export default OfferListScreen;
