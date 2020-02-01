import React, { useState } from 'react';
import CitesListContainer from "../../container/citiesListContainer"
import Button from "../common/button"

import { faCrosshairs, faSearch } from '@fortawesome/free-solid-svg-icons'



// import citesListData from "../../city.list.json"
// import citesListData from "../../test.json"
import citesListData from "../../test copy.json"


const TopBar = ({ getLocation, setLocation }) => {

    const [citySearch, setCitySearch] = useState("");
    const [inputValue, setInputValue] = useState("");
    const [citesList, setcitesList] = useState(citesListData.sort((a, b) => a.name.localeCompare(b.name)));
    const [error, setError] = useState(null);
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

    const clearSearchInput = () => {
        setInputValue("");
        setError(null)
    };

    let handleSearchBtnClick = () => {

        if (citySearch.length === 0) {

            return setError("couldn't find the city try by geolocation")
        } else {

            setLocation(citySearch.coord.lat, citySearch.coord.lon);

        }
        clearSearchInput()
    }


    let handleEnterKeyClick = (event) => {
        if (event.key === "Enter") {
            handleSearchBtnClick()
        }
    }

    let handleGeolocationBtnClick = () => {
        getLocation();
        clearSearchInput();
    }

    return (
        <div className={'citySearch'}>
            <div className={["formErrorMsg", "error", error !== null ? 'showError' : "hideError"].join(" ")}>
                <p className="formErrorMsg__cont">{error}
                </p>
            </div>
            <form className={"citySearch__form"}>

                <input
                    id="citySearch"
                    type="text"
                    placeholder="search..."
                    value={inputValue}
                    className={[error === null ? null : 'citySearch__form__input--error', 'citySearch__form__input'].join(' ')}
                    onChange={(e) => {
                        filtrerCitesList(e.target.value)
                        searchInput(e.target.value)
                        setInputValue(e.target.value)
                    }}
                    onKeyDown={(event) => handleEnterKeyClick(event)}
                    onFocus={() => setVisibility("show")}
                    onBlur={() => {
                        setVisibility("hidden")
                        clearSearchInput()
                    }}
                >
                </input>

                <Button
                    classProps={'btn citySearch__form__btnSearch'}
                    icon={faSearch}
                    iconColor={"#809ee7"}
                    handleClick={handleSearchBtnClick}
                    isError={error}
                >
                </Button>

                <Button
                    classProps={'btn citySearch__form__btnGeo'}
                    icon={faCrosshairs}
                    iconColor={"#809ee7"}
                    handleClick={handleGeolocationBtnClick}
                    onClick={() => clearSearchInput()}
                >

                </Button>

                <CitesListContainer isVisable={isVisable} setVisibility={setVisibility} cities={citesList}></CitesListContainer>
            </form>

        </div>

    );
}

export default TopBar;