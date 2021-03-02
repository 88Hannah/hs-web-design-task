import React, {useState, useEffect} from 'react';
import CaseButton from './CaseButton';

import * as casesData from '../cases.json';

function Cases() {

    const [selectedCase, setSelectedCase] = useState("0");
    const [caseData, setCaseData] = useState("")

    useEffect(() => {
        setCaseData(casesData.cases[selectedCase]);
    }, [selectedCase]);

    const handleClick = event => {
        event.target.blur();
    }

    const voucher = (75).toFixed(2);
    const youPay = (caseData.currentPrice - voucher).toFixed(2);
    const moneySaved = (caseData.originalPrice - youPay).toFixed(2);
    const pricePerBottle = ((Math.round((youPay / 12) * 100))/100).toFixed(2)

    const caseButtons = casesData.cases.map((wineCase, index) => {
        const active = (wineCase.id === casesData.cases[selectedCase].id) ? true : false;
        return <CaseButton key={wineCase.id} caseName={wineCase.name} caseIndex={index} active={active} changeCase={caseIndex => setSelectedCase(caseIndex)}/>
    });

    return (

        <section className="cases">
            <div className="case-options">
                <div className="intro-text">
                    <h1 className="headline">Congratulations! You have £75 to spend on wine!</h1>
                    <p className="sub-headline">We fund winemakers up front, so they can focus on making great wine. In return you get delicious wine at insider prices.</p>
                </div>
            
                <div className="case-visual">
                    <img src={`images/Case/${caseData.image}`} alt={`A ${caseData.name} of wine`} />
                    
                    <div className="saving">
                        <div className="saving__text">
                            <p className="saving__text--small">Save</p>
                            <p className="saving__text--large">£{moneySaved}</p>
                        </div>
                    </div>
                </div>

                <div className="select">
                    <p className="select__text">Choose your case</p>
                    <div className="select__buttons">
                        {caseButtons}
                    </div>
                </div>
            </div>

            <div className="summary-card">
                <div className="best-deal">
                    <h2 className="best-deal__title">Always get the best deal…</h2>
                    <ul className="best-deal__bullets">
                        <li>12 delicious wines made by award-winning winemakers - only £{pricePerBottle} per bottle</li>
                        <li>Take the Naked taste test - try your wines over 30 days to see if we're right for you</li>
                        <li>After 30 days, become a fully fledged Angel and get up to 33% off</li>
                        <li>Angels save £25 into their Naked piggy bank each month, to spend whenever they want</li>
                        <li>No membership fees or tie-ins, so you can cancel anytime at no cost</li>
                        <li>Every wine is backed by our 100% no quibble refund guarantee</li>
                    </ul>
                </div>
                <div className="prices">
                    <div className="prices__item prices__item--strike">
                        <p>Was</p>
                        <p>£{caseData.originalPrice}</p>
                    </div>

                    <div className="prices__item">
                        <p>Now</p>
                        <p>£{caseData.currentPrice}</p>
                    </div>

                    <div className="prices__item prices__item--highlight prices__item--bold">
                        <p>Your voucher</p>
                        <p>-£{voucher}</p>
                    </div>

                    <div className="prices__item prices__item--bold">
                        <p>You pay</p>
                        <p>£{youPay}</p>
                    </div>

                </div>
                
                <button className="add-to-basket" onClick={handleClick}>Add to basket</button>
                
            </div>

        </section>

    )

}

export default Cases;