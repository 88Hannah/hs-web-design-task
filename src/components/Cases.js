import React, {useState, useEffect} from 'react';
import CaseButton from './CaseButton';

import * as casesData from '../cases.json';

function Cases() {

    const [selectedCase, setSelectedCase] = useState("2");
    const [caseData, setCaseData] = useState("")

    useEffect(() => {
        setCaseData(casesData.cases[selectedCase]);
    }, [selectedCase]);

    const voucher = 75;
    const youPay = (caseData.currentPrice - voucher).toFixed(2);
    const moneySaved = (caseData.originalPrice - youPay).toFixed(2);
    const pricePerBottle = ((Math.round((youPay / 12) * 100))/100).toFixed(2)

    console.log(selectedCase, youPay, moneySaved, pricePerBottle)

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
            </div>

            <div className="case-visual">
                <img src={`images/Case/${caseData.image}`} alt={`A ${caseData.name} of wine`} />
                
                <div className="saving">
                    <div className="saving__text">
                        <p className="saving__text-small">Save</p>
                        <p className="saving__text-large">£{moneySaved}</p>
                    </div>
                </div>
            </div>

            <div className="selectCase">
                <p>Choose your case</p>
                <div className="selectCase__buttons">
                    {caseButtons}
                </div>
            </div>
        </section>

    )

}

export default Cases;