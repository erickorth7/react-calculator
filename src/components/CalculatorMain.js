import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { DIGITS } from '../shared/digits';
import Display from './Display';

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
            if(this.state.setCalc === 'E' || this.state.setCalc.length === 9) {
                this.setState({
                    setCalc: this.state.setCalc
                })
            } else {
                this.setState({
                    setCalc: this.state.setCalc + value
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
            if(this.state.setCalc === 'E') {
                resetCalc();
            } else {
                this.setState({
                    input: !this.state.setCalc && this.state.result ? this.state.result 
                            : this.state.input && this.state.operator ? this.state.input
                            : !this.state.setCalc && !this.state.result ? '0'
                            : this.state.setCalc,
                    operator: value,
                    setCalc: ''
                });
            }

            if(this.state.operator && this.state.input && this.state.setCalc) {
                solve(this.state.operator);
                this.setState({
                    operator: value,
                    setCalc: ''
                });
            } 

            switch(value) {
                case '+':
                    this.setState({
                        addStylesActive: true,
                        subtractStylesActive: false,
                        multiplyStylesActive: false,
                        divideStylesActive: false,
                    })
                    break;

                case '-':
                    this.setState({
                        addStylesActive: false,
                        subtractStylesActive: true,
                        multiplyStylesActive: false,
                        divideStylesActive: false,
                    })
                    break;

                case '*':
                    this.setState({
                        addStylesActive: false,
                        subtractStylesActive: false,
                        multiplyStylesActive: true,
                        divideStylesActive: false,
                    })
                    break;
                
                case '/':
                    this.setState({
                        addStylesActive: false,
                        subtractStylesActive: false,
                        multiplyStylesActive: false,
                        divideStylesActive: true,
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
            
            !this.state.input && !this.state.setCalc ? solution = 0
            : this.state.input && !this.state.setCalc ? solution = this.state.input
            : !this.state.input && this.state.setCalc ? solution = this.state.setCalc
            : solution = calculation.toString().slice(0,9);

            if(calculation > 999999999) {
                this.setState({
                    input: '',
                    operator: '',
                    setCalc: 'E',
                    addStylesActive: false,
                    subtractStylesActive: false,
                    multiplyStylesActive: false,
                    divideStylesActive: false,
                    result: 'E'
                });
            } else {
                this.setState({
                    input: solution,
                    operator: '',
                    setCalc: '',
                    addStylesActive: false,
                    subtractStylesActive: false,
                    multiplyStylesActive: false,
                    divideStylesActive: false,
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
                                <Display setCalc={this.state.setCalc} result={this.state.result} input={this.state.input} />
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