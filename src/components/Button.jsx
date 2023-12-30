import React from 'react';
import './Button.css';

export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation': ''
    classes += props.double ? 'double': ''
    classes += props.triple ? 'triple': ''

    return (
        <button 
            className={classes} 
            onClick={e => props.click && props.click(props.label)}>
            {props.label}
        </button>
    )
}