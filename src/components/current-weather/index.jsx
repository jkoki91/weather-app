import React from "react";
import { useFetchWithCoords, useFetchWithCity } from "../../custom-hook/useFetch";

function CurrentWeather() {
    console.log('holaaa');
    useFetchWithCoords();
    // useFetchWithCity();

    return (
        <React.Fragment>
            <h3>Temperatura: </h3>
            <h3>Sensación térmica: </h3>
            <h3>Índice UV: </h3>
        </React.Fragment>
    )
}

export default CurrentWeather;