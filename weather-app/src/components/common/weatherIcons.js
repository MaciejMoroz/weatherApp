import React from 'react';

const WeatherIcon = ({ iconType, iconId }) => {
    return (
        <>
            <img src={require(`../../img/weatherIcons/${iconType}${iconId}.png`)} alt={'icon'}></img>
        </>
    );

}


export default WeatherIcon;



