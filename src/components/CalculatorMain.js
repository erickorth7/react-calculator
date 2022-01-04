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
            setCalc: ''
        }   
    }
    
    render() {


        const updateCalc = (value) => {
            this.setState({
                setCalc: this.state.setCalc + value
            });

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
                    if(parseFloat(this.state.input) + parseFloat(this.state.setCalc) > 999999999) {
                        this.setState({
                            setCalc: 'E',
                            addStylesActive: false
                        })
                    } else {
                        this.setState({
                            setCalc: parseFloat(this.state.input) + parseFloat(this.state.setCalc),
                            addStylesActive: false
                        })
                    }
                    break;

                case '-':
                    this.setState({
                        setCalc: parseFloat(this.state.input) - parseFloat(this.state.setCalc),
                        subtractStylesActive: false
                    })
                    break;

                case '*':
                    if(parseFloat(this.state.input) * parseFloat(this.state.setCalc) > 999999999) {
                        this.setState({
                            setCalc: 'E',
                            multiplyStylesActive: false
                        })
                    } else {
                        this.setState({
                            setCalc: parseFloat(this.state.input) * parseFloat(this.state.setCalc),
                            multiplyStylesActive: false
                        })
                    }
                    break;

                case '/':
                    if(parseFloat(this.state.input) / parseFloat(this.state.setCalc) > 999999999) {
                        this.setState({
                            setCalc: 'E',
                            divideStylesActive: false
                        })
                    } else {
                        this.setState({
                            setCalc: parseFloat(this.state.input) / parseFloat(this.state.setCalc),
                            divideStylesActive: false
                        })
                    }
                    break;
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
                    <div className='col-9 col-md-6 calculatorFrame'>
                        <div className='container m-0 p-0'>
                            <div className='row'>
                                <div className="col display text-center">
                                    <span style={{fontSize: 40}}>
                                        {this.state.setCalc || this.state.input || '0'}
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
                                    <Button className='col-4 button' value='.' onClick={() => updateCalc('.')}>.</Button>
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