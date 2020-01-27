import React, { useState } from 'react';
import citesList from "../../city.list.json"

const TopBar = ({ getLocation, setLocation }) => {
    const [cityState, setCity] = useState([]);

    let handleChange = (value) => {
        // eslint-disable-next-line
        citesList.map(city => {
            if (city.name.toLowerCase() === value.toLowerCase()) {
                return setCity(city)
            }

        })
    }
    let handleClick = () => {
        setLocation(cityState.coord.lat, cityState.coord.lon);
    }

    let add = (event) => {
        if (event.key === "Enter") {
            setLocation(cityState.coord.lat, cityState.coord.lon)
        }
    }

    return (
        <>
            <button onClick={() => getLocation()}>by geo location</button>
            <input onChange={(e) => handleChange(e.target.value)} onKeyDown={(event) => add(event)}></input>
            <button onClick={() => handleClick()}>serch</button>
        </>
    );
}

export default TopBar;