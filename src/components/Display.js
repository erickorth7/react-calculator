import React from 'react';

export default function Display(props) {

    return(
        <div className="col display text-center">
            <span style={{fontSize: 40}}>
                {props.setCalc || props.result || props.input || '0'}
            </span>
        </div>
    );
}