import React, { useEffect } from 'react';
let render = 0
const CitesList = ({ cities, setLocation, isVisable, setVisibility }) => {
    useEffect(() => {

        console.log(render);
        render++
    }, [setVisibility, isVisable])
    if (cities.length > 0) {
        return (
            <>
                {console.log(render)}
                < ul className={[isVisable, "scrollableDiv"].join(' ')}

                >
                    {
                        cities.map(city =>
                            <li onClick={() => {
                                setLocation(city.coord.lat, city.coord.lon)
                            }
                            } key={city.id}>{city.name} </li>
                        )
                    }

                </ul >
            </>
        )

    } else {
        return (
            <p className={"scrollableDiv"}>
                No results!
            </p>)
    }
}

export default CitesList;