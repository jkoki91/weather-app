import { CoordsContext } from "./coords-context";
import { useEffect, useState } from "react";

function CoordsContextProvider({ children }) {
    const [data, setData] = useState(null);
    let [city, setCity] = useState('Madrid');
    let [latitude, setLatitude] = useState(null);
    let [longitude, setLongitude] = useState(null);
    const [currentCity, setCurrentCity] = useState('Madrid')
    let [counter, setCounter] = useState(0);
    return (
        <CoordsContext.Provider value={[data, setData, city, setCity, latitude, setLatitude, longitude, setLongitude, currentCity, setCurrentCity, counter, setCounter]}>
            {children}
        </CoordsContext.Provider>
    )
}

export default CoordsContextProvider;