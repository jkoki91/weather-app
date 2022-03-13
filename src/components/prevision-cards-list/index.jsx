import React, { useContext, useState } from "react";
import PrevisionCards from "../prevision-cards";
import { CoordsContext } from "../../context/coords-context";
import "./style.css";

export default function PrevisionCardsList() {
  const [
    data,
    setData,
    city,
    setCity,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
  ] = useContext(CoordsContext);

  const weekDays = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daily = data.daily;

  const handleCardClick = (i) => {
    console.log(data);
    console.log(data.daily[0]);
   
  };

  const printPrevisionCards = daily.map((day, i) => {
    const timestamp = day.dt * 1000;
    const date = new Date();
    const previsionDay = new Date(timestamp).getDate();
    const weekDay = new Date(timestamp).getDay().toString();
    const month = months[date.getMonth()];

    if (i >= 1) {
     return <PrevisionCards weekday={weekDays[weekDay]} day={previsionDay} month={month} degrees={Math.round(day.temp.day)} rain={day.humidity} type={day.weather[0].icon}></PrevisionCards>
    }
  });

  return (
    <>
      {daily === null || daily === undefined ? "cargando" : printPrevisionCards}
    </>
  );
}

