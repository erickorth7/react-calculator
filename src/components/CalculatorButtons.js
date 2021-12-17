import React from 'react';

export default function CalculatorButtons() {

    const buttons = ['+', '-', '*', '/', 'DEL'];
    const renderButtons = () => {
       const calculatorButtons = buttons.map(a => <button>{a}</button>);
        return calculatorButtons;
    }

    return (
        <div className="row calculator-operators">
            <div className="col text-center">
                {renderButtons()}
            </div>
        </div>
    );
}
