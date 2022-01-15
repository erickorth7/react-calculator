import React, { Component } from 'react';
import { Button } from 'reactstrap';
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
            setCalc: '',
            result: ''
        }   
    }
    
    render() {


        const updateCalc = (value) => {

            if(this.state.result === '') {
                this.setState({
                    setCalc: this.state.setCalc + value
                });
            }

            if(this.state.setCalc.length === 9) {
                this.setState({
                    setCalc: this.state.setCalc
                });
            }
        }

        const resetCalc = () => {
            this.setState({
                input: '',
                operator: '',
                addStylesActive: false,
                subtractStylesActive: false,
                multiplyStylesActive: false,
                divideStylesActive: false,
                setCalc: '',
                result: ''
            });
        }

        const handleDecimal = (value) => {
            if(this.state.setCalc.includes('.') && value === '.') {
                return;
            } else {
                updateCalc(value);
            }
        }

        const handleNegative = (value) => {
            if(this.state.setCalc.includes('-') && value === '-') {
                return;
            } else if(this.state.setCalc && value === '-') {
                return;
            } else {
                updateCalc(value);
            }
        }

        const handleOperator = (value) => {
            this.setState({
                input: this.state.setCalc,
                operator: value,
                setCalc: ''
            });

            if(this.state.setCalc === '') {
                this.setState({
                    input: '0'
                })
            }

            switch(value) {
                case '+':
                    this.setState({
                        addStylesActive: true,
                        subtractStylesActive: false,
                        multiplyStylesActive: false,
                        divideStylesActive: false,
                        result: ''
                    })
                    break;

                case '-':
                    this.setState({
                        addStylesActive: false,
                        subtractStylesActive: true,
                        multiplyStylesActive: false,
                        divideStylesActive: false,
                        result: ''
                    })
                    break;

                case '*':
                    this.setState({
                        addStylesActive: false,
                        subtractStylesActive: false,
                        multiplyStylesActive: true,
                        divideStylesActive: false,
                        result: ''
                    })
                    break;
                
                case '/':
                    this.setState({
                        addStylesActive: false,
                        subtractStylesActive: false,
                        multiplyStylesActive: false,
                        divideStylesActive: true,
                        result: ''
                    })
                    break;
            }
        }

        const solve = (operator) => {

            let calculation;
            let solution;

            switch(operator) {
                case '+':
                    calculation = parseFloat(this.state.input) + parseFloat(this.state.setCalc);
                    break;

                case '-':
                    calculation = parseFloat(this.state.input) - parseFloat(this.state.setCalc);
                    break;

                case '*':
                    calculation = parseFloat(this.state.input) * parseFloat(this.state.setCalc);
                    break;

                case '/':
                    calculation = parseFloat(this.state.input) / parseFloat(this.state.setCalc);
                    break;
            }

            solution = calculation.toString().slice(0,9);

            if(calculation > 999999999) {
                this.setState({
                    setCalc: 'E',
                    addStylesActive: false,
                    result: 'E'
                });
            } else {
                this.setState({
                    setCalc: solution,
                    addStylesActive: false,
                    result: solution
                });
            }
        }


        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col pt-5 pb-5 text-center'>
                        <h1>React Calculator</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-9 col-sm-6 col-lg-4 calculatorFrame'>
                        <div className='container m-0 p-0'>
                            <div className='row'>
                                <div className="col display text-center">
                                    <span style={{fontSize: 40}}>
                                        {this.state.result || this.state.setCalc || this.state.input || '0'}
                                    </span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='operators'>
                                    <Button
                                        className={`col-2 button operator${this.state.addStylesActive ? 'Active' : ''}`}
                                        value="+" 
                                        onClick={() => handleOperator("+")}>
                                        +
                                    </Button>
                                    <Button
                                        className={`col-2 button operator${this.state.subtractStylesActive ? 'Active' : ''}`}
                                        value="-"
                                        onClick={() => handleOperator("-")}>
                                        -
                                    </Button>
                                    <Button
                                        className={`col-2 button operator${this.state.multiplyStylesActive ? 'Active' : ''}`}
                                        value="*"
                                        onClick={() => handleOperator("*")}>
                                        *
                                    </Button>
                                    <Button
                                        className={`col-2 button operator${this.state.divideStylesActive ? 'Active' : ''}`}
                                        value="/"
                                        onClick={() => handleOperator("/")}>
                                        /
                                    </Button>
                                    <Button
                                        className='col-4 button operator'
                                        value='='
                                        onClick={() => resetCalc()}>
                                        C
                                    </Button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="digits">
                                    {this.state.digits.map(a => <Button className='col-4 button' key={a} value={a} onClick={() => updateCalc(a.toString())}>{a}</Button>)}
                                    <Button className='col-4 button' style={{borderBottomLeftRadius: '10px'}} value='0' onClick={() => updateCalc('0')}>0</Button>
                                    <Button className='col-2 button' value='-' onClick={() => handleNegative('-')}>-</Button>
                                    <Button className='col-2 button' value='.' onClick={() => handleDecimal('.')}>.</Button>
                                    <Button className='col-4 button operator' style={{borderBottomRightRadius: '10px'}} value='=' onClick={() => solve(this.state.operator)}>=</Button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        );
    }
}