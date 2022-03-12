import { CoordsContext } from "./coords-context";
import { useEffect, useState } from "react";

function CoordsContextProvider({ children }) {
    const [city, setCity] = useState('Madrid');
    let [latitude, setLatitude] = useState('');
    let [longitude, setLongitude] = useState('');
    // const [data, setData] = useState([]);
   
   

    return (
        <CoordsContext.Provider value={[city, setCity, latitude, setLatitude, longitude, setLongitude]}>
            {children}
        </CoordsContext.Provider>
    )
}

export default CoordsContextProvider;