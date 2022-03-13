import "./style.css";
import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WeatherIcon from "../weather-icon";
import tempIcon from "../../assets/weather-icons/temp.svg";
import rainIcon from '../../assets/weather-icons/rain.svg';
import { TemperatureContext } from "../../context/temperature-context";



export default function PrevisionCards({weekday, day, month, degrees, rain, type}) {
  const [currentTemp, setCurrentTemp] = useContext(TemperatureContext)
  console.log('icono', type)
  return (
    <article onClick={cardClick} className="prev-card__container">
      <div className="prev-card__weather-icon">
        <WeatherIcon className="prev-card__wi" type={type} color='#666666' width="52" height="42"></WeatherIcon>
        
      </div>

      <div className="prev-card__info">
        <div>
          <h3 className="prev-card__date">{weekday}, {day} {month}</h3>
        </div>
        <div className="prev-card__temp-rain">
          <div className="prev-card_temp prev-info">
            <img className="prev-icons" src={tempIcon} />
            <p className="text-data-icon">{degrees}{' ' + currentTemp}</p>
          </div>
          <div className="prev-card_rain prev-info">
            <img className="prev-icons" src={rainIcon} />
            <p className="text-data-icon">{rain}%</p>
          </div>
        </div>
      </div>
    </article>
  );
}
