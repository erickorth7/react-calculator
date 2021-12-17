import React, { Component } from 'react';
import CalculatorButtons from './CalculatorButtons';
import CalculatorDigits from './CalculatorDigits';
import CalculatorScreen from './CalculatorScreen';

class Calculator extends Component {


    render() {

        return (
            <div className="container calculator-frame">
                <div className="row">
                    <div className="col">
                        <div className="container calculator-screen">
                            <CalculatorScreen />
                        </div>
                        <div className="container calculator-buttons">
                            <CalculatorButtons />
                            <CalculatorDigits />
                        </div>
                    </div>
                </div>
            </div>
    );
    }
}

export default Calculator;