import React, { useContext } from "react";
import { CoordsContext } from "../context/coords-context";

export const useGeolocation = () => {
    const [city, setCity, latitude, setLatitude, longitude, setLongitude] = useContext(CoordsContext);
    navigator.geolocation.getCurrentPosition(function (pos) {
        setLatitude(pos.coords.latitude)
        setLongitude(pos.coords.longitude)
    })
}