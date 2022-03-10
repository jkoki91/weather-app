import { useState, useEffect, useContext } from "react";
import { CoordsContext } from "../context/coords-context";

export const useFetchWithCity = (api) => {
    const [city, setCity, latitude, setLatitude, longitude, setLongitude] = useContext(CoordsContext);
    const API_KEY = '';
    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=2&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const info = Object.entries(data[0])
                const [, latCoord] = info[2]
                setLatitude(latCoord)
                const [, lonCoord] = info[3]
                setLongitude(lonCoord)
            })
    }, [])
}

export const useFetchWithCoords = (api) => {
    const API_KEY = '';
    const docApiPrevision = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly&appid=${API_KEY}`
    const [city, setCity, latitude, setLatitude, longitude, setLongitude] = useContext(CoordsContext);

    console.log('hi');
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${40.416775}&lon=${-3.703790}&units=metric&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data => console.log(data))
}