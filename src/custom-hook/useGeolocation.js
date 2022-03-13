import React, { useContext, useEffect, useState } from "react";
import { CoordsContext } from "../context/coords-context";

export const useGeolocation = () => {
    // let [latitude, setLatitude] = useState('');
    // let [longitude, setLongitude] = useState('');
    const [data, setData, city, setCity, latitude, setLatitude, longitude, setLongitude] = useContext(CoordsContext);
  
    useEffect(() => {
        function success(pos) {
         const crd = pos.coords;
           setLatitude(crd.latitude);
           setLongitude(crd.longitude);
          };
        navigator.geolocation.getCurrentPosition(success)
    }, [])
    
    
}