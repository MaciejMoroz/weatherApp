import React, { useState } from 'react';
import CitesListContainer from "../../container/citiesListContainer"


// import citesListData from "../../city.list.json"
import citesListData from "../../test.json"

const TopBar = ({ getLocation, setLocation }) => {
    const [citySearch, setCitySearch] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [citesList, setcitesList] = useState(citesListData);
    const [msg, setMsg] = useState(null);
    const [isVisable, setVisibility] = useState("hidden");

    let filtrerCitesList = (event) => {
        const text = event;
        const filtredCitesList = getFiltredCitesListForText(text);
        setcitesList(filtredCitesList);

    }
    let getFiltredCitesListForText = (text) => {
        return citesListData.filter(city => city.name.toLowerCase().includes(text.toLowerCase()))
    }


    let searchInput = (value) => {
        // eslint-disable-next-line
        citesListData.map(city => {
            if (city.name.toLowerCase() === value.toLowerCase()) {
                setCitySearch(city)
            }

        })
    }
    let handleClick = () => {
        if (citySearch.length === 0) {
            return setMsg("couldn't find the city try by geo location")

        } else {
            setLocation(citySearch.coord.lat, citySearch.coord.lon);

        }
    }
    const clearInput = () => {
        setInputValue("");
    };

    let add = (event) => {
        if (event.key === "Enter") {
            setLocation(citySearch.coord.lat, citySearch.coord.lon)
        }
    }

    return (
        <>
            {console.log(isVisable)
            }
            <button onClick={() => getLocation()}>by geo location</button>
            <input
                id="citySearch"
                type="text"
                placeholder="search..."
                value={inputValue}
                onChange={(e) => {
                    filtrerCitesList(e.target.value)
                    searchInput(e.target.value)
                    setInputValue(e.target.value)
                }}
                onKeyDown={(event) => add(event)}
                onFocus={() => setVisibility("show")}
                onBlur={() => {
                    setVisibility("hidden")
                    clearInput()
                }}
            >
            </input>
            {msg != null ? <p className="error">{msg}</p> : null}


            <button onClick={() => {
                handleClick()
                clearInput()
            }
            }>
                serch
                    </button>
            <CitesListContainer isVisable={isVisable} cities={citesList}></CitesListContainer>

        </>
    );
}

export default TopBar;