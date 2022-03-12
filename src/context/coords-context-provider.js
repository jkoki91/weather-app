import { CoordsContext } from "./coords-context";
import { useEffect, useState } from "react";

function CoordsContextProvider({ children }) {
    const [data, setData] = useState(null);
    const [city, setCity] = useState('Madrid');
    let [latitude, setLatitude] = useState('40');
    let [longitude, setLongitude] = useState('-3');
    
   
   

    return (
        <CoordsContext.Provider value={[data, setData, city, setCity, latitude, setLatitude, longitude, setLongitude]}>
            {children}
        </CoordsContext.Provider>
    )
}

export default CoordsContextProvider;