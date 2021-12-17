import React from 'react';


export default function CalculatorDigits() {

    const renderDigits = () => {
        const digits = [];
        for(let i=1;i<10;i++) {
            digits.push(<button key={i}>{i}</button>)
        }
        return digits;
    }

    return(
        <div className="row calculator-digits">
            <div className="col text-center">
                {renderDigits()}
                <button>0</button>
                <button>.</button>
                <button>=</button>
            </div>
        </div>
    );
}