import React, { Component } from 'react';


class Calculator extends Component {


    render() {

        const renderDigits = () => {
            const digits = [];

            for(let i=1; i < 10; i++) {
                digits.push(<button key={i}>{i}</button>);
            }
            return digits; //DON'T FORGET THE RETURN!
        }

        return (
            <div className="container calculator-frame">
                <div className="row">
                    <div className="col">
                        <div className="container calculator-screen">
                            <div className="row">
                                <div className="col">
                                    <span className="calculator-input"><span className="calculator-input">(0)</span> 0</span>
                                </div>
                            </div>
                        </div>
                        <div className="container calculator-buttons">
                            <div className="row calculator-operators">
                                <div className="col">
                                    <button>+</button>
                                    <button>-</button>
                                    <button>*</button>
                                    <button>/</button>
                                </div>
                            </div>
                            <div className="row calculator-digits">
                                <div className="col">
                                    {renderDigits()}
                                    <button>0</button>
                                    <button>.</button>
                                    <button>=</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
    }
}

export default Calculator;