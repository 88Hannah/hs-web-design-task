import React from 'react';

function WineCard({wineData}) {


    const percentage = Math.round((wineData.buyAgainReviews / wineData.totalReviews) * 100)


    return (

        <div className="wine-card">

            <div className="image-container">
                <img src={`/images/Wine/${wineData.image}`} alt={wineData.name} style={{width: "200px"}} />
                
                <div className="quantity">
                    <p className="quantity__text">x{wineData.quantity}</p>
                </div>

                <div className="recommended">
                    <div className="recommended__text">
                        <p className="recommended__text-large">{percentage}%</p>
                        <p className="recommended__text-medium">of {wineData.totalReviews}</p>
                        <p className="recommended__text-small">would buy it again</p>
                    </div>
                </div>
            </div>

            <p className="wine-card__title">{wineData.name}</p>

            <div className="wine-details">
                <div className="wine-details__item country">
                    <img src="/images/Icon/Pin.svg" alt="location icon" />
                    <p>{wineData.country}</p>
                </div>

                <div className="wine-details__item style">
                    <img src="/images/Icon/Glass.svg" alt="Wine glass icon" />
                    <p>{wineData.style}</p>
                </div>

                <div className="wine-details__item country">
                    <img src="/images/Icon/Grape.svg" alt="Grape icon" />
                    <p>{wineData.grape}</p>
                </div>
            </div>

            <p className="wine-card__description">{wineData.description}</p>

            <p className="wine-card__price">Price: £{wineData.price}</p>

        </div>

    )

}

export default WineCard;