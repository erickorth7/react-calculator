import React, { Component } from 'react';
import { DIGITS } from '../shared/digits';

export default class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            digits: DIGITS,
            input: '',
            operator: '',
            addStylesActive: false,
            subtractStylesActive: false,
            multiplyStylesActive: false,
            divideStylesActive: false,
            setCalc: ''
        }   
    }
    
    render() {


        const updateCalc = (value) => {
            this.setState({
                setCalc: this.state.setCalc + value
            });
        }

        const resetCalc = () => {
            this.setState({
                input: '',
                operator: '',
                addStylesActive: false,
                subtractStylesActive: false,
                multiplyStylesActive: false,
                divideStylesActive: false,
                setCalc: ''
            });
        }

        const handleOperator = (value) => {
            this.setState({
                input: this.state.setCalc,
                operator: value,
                setCalc: ''
            });

            switch(value) {
                case '+':
                    this.setState({
                        addStylesActive: true
                    })
                    break;

                case '-':
                    this.setState({
                        subtractStylesActive: true
                    })
                    break;

                case '*':
                    this.setState({
                        multiplyStylesActive: true
                    })
                    break;
                
                case '/':
                    this.setState({
                        divideStylesActive: true
                    })
                    break;
            }
        }

        const solve = (operator) => {

            switch(operator) {
                case '+':
                    this.setState({
                        setCalc: parseFloat(this.state.input) + parseFloat(this.state.setCalc),
                        addStylesActive: false
                    })
                    break;

                case '-':
                    this.setState({
                        setCalc: parseFloat(this.state.input) - parseFloat(this.state.setCalc),
                        subtractStylesActive: false
                    })
                    break;

                case '*':
                    this.setState({
                        setCalc: parseFloat(this.state.input) * parseFloat(this.state.setCalc),
                        multiplyStylesActive: false
                    })
                    break;

                case '/':
                    this.setState({
                        setCalc: parseFloat(this.state.input) / parseFloat(this.state.setCalc),
                        divideStylesActive: false
                    })
                    break;
            }
        }

        return (
            <div className='container calculatorFrame'>
                <div className="row">
                    <div className="col display">
                        <span style={{fontSize: 40}}>
                            {this.state.setCalc || this.state.input || '0'}
                        </span>
                    </div>
                </div>
                <div className="row">
                    <div className="col operators">
                        <button
                            className={`button operator${this.state.addStylesActive ? 'Active' : ''}`}
                            value="+" 
                            onClick={() => handleOperator("+")}>
                            +
                        </button>
                        <button
                            className={`button operator${this.state.subtractStylesActive ? 'Active' : ''}`}
                            value="-"
                            onClick={() => handleOperator("-")}>
                            -
                        </button>
                        <button
                            className={`button operator${this.state.multiplyStylesActive ? 'Active' : ''}`}
                            value="*"
                            onClick={() => handleOperator("*")}>
                            *
                        </button>
                        <button
                            className={`button operator${this.state.divideStylesActive ? 'Active' : ''}`}
                            value="/"
                            onClick={() => handleOperator("/")}>
                            /
                        </button>
                        <button
                            className='button operator'
                            value='='
                            onClick={() => resetCalc()}>
                            C
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col digits">
                        {this.state.digits.map(a => <button className='button' key={a} value={a} onClick={() => updateCalc(a.toString())}>{a}</button>)}
                        <button className='button' value='.' onClick={() => updateCalc('.')}>.</button>
                        <button className='button operator' value='=' onClick={() => solve(this.state.operator)}>=</button>
                    </div>
                </div>
            </div>
        );
    }
}