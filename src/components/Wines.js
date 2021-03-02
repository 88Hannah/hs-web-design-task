import React from 'react';
import WineCard from './WineCard';

import * as winesData from '../wines.json';

function Wines() {

    const wineCards = winesData.wines.map(wine => (
        <WineCard key={wine.id} wineData={wine} />
    ));

    return (

        <section className="wines-container">

            <div className="wines">

                <h2 className="wines__title">Meet the 12 wines in your mixed case</h2>

                <div className="wine-cards main-carousel" data-flickity='{"contain" : true, "cellAlign" : "left" }'>
                    {wineCards}
                </div>

            </div>

        </section>

    )

}

export default Wines;