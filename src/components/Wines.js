import React from 'react';
import WineCard from './WineCard';

import * as winesData from '../wines.json';

function Wines() {

    const wineCards = winesData.wines.map(wine => (
        <WineCard key={wine.id} wineData={wine} />
    ));

    return (

        <section className="wines">

            <h2 className="wines__title">Meet the 12 wines in your mixed case</h2>

            <div className="wine-cards main-carousel" data-flickity='{ "cellAlign": "left", "contain": true }'>
                {wineCards}
            </div>

        </section>

    )

}

export default Wines;