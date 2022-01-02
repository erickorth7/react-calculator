import React, { Component } from 'react';
import { OPERATORS } from '../shared/operators';
import { DIGITS } from '../shared/digits';

export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            operators: OPERATORS,
            digits: DIGITS,
            input: '',
            setCalc: '',
            finalInput: '',
            result: ''
        }   
    }
    
    render() {

        const updateCalc = (value) => {
            this.setState({
                input: this.state.input + value,
                setCalc: this.state.setCalc + value
                });
        }

        const resetCalc = () => {
            this.setState({
                input: '',
                setCalc: '',
                finalInput: ''
            })
        }

        const add = () => {
            this.setState({
                setCalc: '',
                finalInput: this.state.input
            })
        }

        const solve = () => {
            this.setState({
                setCalc: parseInt(this.state.finalInput) + parseInt(this.state.setCalc)
            })
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
                        <button className='button operator' value="+" onClick={() => add()}>+</button>
                        <button className='button operator' value='=' onClick={() => resetCalc()}>C</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col digits">
                        {this.state.digits.map(a => <button className='button' key={a} value={a} onClick={() => updateCalc(a.toString())}>{a}</button>)}
                        <button className='button' value='.' onClick={() => updateCalc('.')}>.</button>
                        <button className='button operator' value='=' onClick={() => solve()}>=</button>
                    </div>
                </div>
            </div>
        );
    }
}