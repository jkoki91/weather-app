import { CoordsContext } from "./coords-context";
import { useState } from "react";

function CoordsContextProvider({ children }) {
    const [city, setCity] = useState('Madrid');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    // const [data, setData] = useState([]);


    return (
        <CoordsContext.Provider value={[city, setCity, latitude, setLatitude, longitude, setLongitude]}>
            {children}
        </CoordsContext.Provider>
    )
}

export default CoordsContextProvider;