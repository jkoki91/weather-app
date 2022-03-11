import { useState, useEffect, useContext } from "react";
import { CoordsContext } from "../context/coords-context";

export const useFetchWithCity = (api) => {
    const [city, setCity, latitude, setLatitude, longitude, setLongitude,data, setData] = useContext(CoordsContext);
    const API_KEY = '';
    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=2&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const info = Object.entries(data[0])
                const [, latCoord] = info[2]
                setLatitude(latCoord)
                const [, lonCoord] = info[3]
                setLongitude(lonCoord)
            })
    }, [])
}

export const useFetchWithCoords = (api) => {
    const [city, setCity, latitude, setLatitude, longitude, setLongitude,data, setData] = useContext(CoordsContext);
    const API_KEY = '1f7689b2591acb5efd5d91b7e124bf44';
    const docApiPrevision = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly&appid=${API_KEY}`
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${64}&lon=${150}&units=metric&lang=es&appid=${API_KEY}`)
        .then(res => res.json())
        .then(data =>{
            setData(data)
            // console.log(data)
        }) 
    },[])
    
    
}