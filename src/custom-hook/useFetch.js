import { useState, useEffect, useContext } from "react";
import { CoordsContext } from "../context/coords-context";
import { apiKey } from "../key/key";
import { useGeolocation } from "./useGeolocation";
import { TemperatureContext } from "../context/temperature-context";

export const useFetchWithCity = (api) => {
    const [data, setData, city, setCity, latitude, setLatitude, longitude, setLongitude] = useContext(CoordsContext);
   

    useEffect(() => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=2&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log('prueba')
                const info = Object.entries(data[0])
                const [, latCoord] = info[2]
                setLatitude(latCoord)
                const [, lonCoord] = info[3]
                setLongitude(lonCoord)
            })
    }, [city])
}


export const useFetchWithCoords = (api) => {
    const [data, setData, city, setCity, latitude, setLatitude, longitude, setLongitude] = useContext(CoordsContext);
  const [currentTemp, setCurrentTemp, units, setUnits] = useContext(TemperatureContext);
    
    // let coords = useGeolocation();
    console.log(latitude);
    console.log(longitude)
    
    const docApiPrevision = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly&appid=${apiKey}`
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude===(null||'')?'50':latitude}&lon=${longitude===(null||'')?'50':longitude}&units=${units}&lang=es&appid=${apiKey}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setData(data)
            
        }) 
    },[latitude,longitude,city, units])
    return data;
    
}