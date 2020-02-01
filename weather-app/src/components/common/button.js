import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({ value, icon, iconColor, handleClick, classProps, isError }) => {

    let handlePreventDefault = (e) => {
        e.preventDefault()
    }

    return (
        <button
            onClick={(e) => {
                handlePreventDefault(e)
                handleClick()
            }}
            className={[isError === null ? classProps : `${classProps}--error`, classProps].join(' ')}
        >
            <FontAwesomeIcon icon={icon} color={iconColor} />
            {value}
        </button>
    );
}

export default Button;


