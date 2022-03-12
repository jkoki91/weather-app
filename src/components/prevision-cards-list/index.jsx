import React, { useContext, useState } from "react";
import PrevisionCards from "../prevision-cards";
import { CoordsContext } from "../../context/coords-context";
import './style.css'

export default function PrevisionCardsList() {
    const [data, setData, city, setCity, latitude, setLatitude, longitude, setLongitude] = useContext(CoordsContext);

    const dict = {
        '0': 'Sunday',
        '1': 'Monday',
        '2': 'Tuesday',
        '3': 'Wednesday',
        '4': 'Thursday',
        '5': 'Friday',
        '6': 'Saturday'
    }

    const daily = data.daily;
    
    const printPrevisionCards = daily.map((day, i) => {
        const timestamp = day.dt*1000;
        const previsionDay = new Date(timestamp).getDate();
        const weekDay = new Date(timestamp).getDay().toString();
   
        if (i >= 1) {
            return <PrevisionCards weekday={dict[weekDay]} day={previsionDay} degrees={Math.round(day.temp.day)} rain={day.humidity}></PrevisionCards>
        }
    })
    return(
        <section className="prev-cards__scroll-container">
            {data === null ? 'cargando' : printPrevisionCards}
            
        </section>
    )
}