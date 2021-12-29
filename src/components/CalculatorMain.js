import React, { Component } from 'react';
import { OPERATORS } from '../shared/operators';
import { DIGITS } from '../shared/digits';

export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            operators: OPERATORS,
            digits: DIGITS,
            setCalc: '',
            result: ''
        }   
    }
    
    render() {

        const add = (a, b) => {
            return a + b;
        }

        const subtract = (a, b) => {
            return a - b;
        }

        const multiply = (a, b) => {
            return a * b;
        }

        const divide = (a, b) => {
            return a / b;
        }

        const updateCalc = value => {
           this.setState({
               setCalc: value
            });
        }

        return (
            <div className='container calculatorFrame'>
                <div className="row">
                    <div className="col display">
                        <span style={{fontSize: 40}}>
                            {this.state.result ? <span style={{fontSize: 20}}>(0)</span> : ''}
                            {this.state.setCalc || '0'}
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col operators">
                        {this.state.operators.map(a => <button className='button operator' value={a} onClick={() => updateCalc(a.toString())}>{a}</button>)}
                        <button className='button operator' value='=' onClick={() => updateCalc('0')}>C</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col digits">
                        {this.state.digits.map(a => <button className='button' key={a} value={a} onClick={() => updateCalc(a.toString())}>{a}</button>)}
                        <button className='button' value='.' onClick={() => updateCalc('.')}>.</button>
                        <button className='button operator' value='=' onClick={() => updateCalc('')}>=</button>
                    </div>
                </div>
            </div>
        );
    }
}