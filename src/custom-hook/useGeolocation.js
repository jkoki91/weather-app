import React, { useContext, useEffect, useState } from "react";
import { CoordsContext } from "../context/coords-context";

export const useGeolocation = () => {
    let [latitude, setLatitude] = useState('');
    let [longitude, setLongitude] = useState('');
  
    useEffect(() => {
        function success(pos) {
            const crd = pos.coords;
            console.log(pos)
            console.log('Your current position is:');
            console.log('Latitude : ' + crd.latitude);
            console.log('Longitude: ' + crd.longitude);
            console.log('More or less ' + crd.accuracy + ' meters.');
    
           setLatitude(crd.latitude);
           setLongitude(crd.longitude);
          };
        navigator.geolocation.getCurrentPosition(success)
    
        
    }, [])
    return {latitude, longitude}
}