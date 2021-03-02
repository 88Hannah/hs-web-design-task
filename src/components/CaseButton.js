import React from 'react';

function CaseButton({caseName, caseIndex, active, changeCase}) {

    const buttonClass = active ? "active" : "";

    const handleClick = event => {

        changeCase(caseIndex);
        event.target.blur();

    }

    return (
        <button className={`case-btn ${buttonClass}`} onClick={handleClick}>{caseName}</button>
    )

}

export default CaseButton;