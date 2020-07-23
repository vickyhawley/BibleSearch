import React from 'react';
import './button.scss';

const Button = ({ children, ...rest }) => {
    return (
        <button className="button" {...rest}>
            { children }
        </button>
    )
}

export default Button;