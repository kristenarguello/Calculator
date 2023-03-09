import React from 'react';
import './Button.css';

interface PropsTypes {
    number: String | number,
    color: String,
    position: `${yAxis}-${xAxis}`;
}

type yAxis = 'bottom' | 'top' | 'center';
type xAxis = 'left' | 'right' | 'center';


export function Button({
    number,
    color,
    position
} : PropsTypes) {

    
    return(
        <button className={`${color} ${position}`}>
            {number}
        </button>
    );
};

