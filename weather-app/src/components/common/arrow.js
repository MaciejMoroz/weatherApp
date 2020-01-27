import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

let arrowStyle = {
    "margin": "0 5px 0 5px"
}

const ArrowIcon = ({ arrowType, arrowColor }) => {

    return (
        <FontAwesomeIcon style={arrowStyle} icon={faChevronDown} className={arrowType} color={arrowColor} />
    );
}

export default ArrowIcon;