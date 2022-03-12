import { Container, Row, Col } from "react-bootstrap";
import WeatherIcon from "../weather-icon";
import tempIcon from "../../assets/weather-icons/temp.svg";
import rainIcon from '../../assets/weather-icons/rain.svg';
import "./style.css";


export default function PrevisionCards({weekday, day, degrees, rain}) {
  return (
    <article className="prev-card__container">
      <div className="prev-card__weather-icon">
        <WeatherIcon className="prev-card__wi" type="01d"></WeatherIcon>
      </div>

      <div className="prev-card__info">
        <div>
          <h3 className="prev-card__date">{weekday}, {day} March</h3>
        </div>
        <div className="prev-card__temp-rain">
          <div className="prev-card_temp prev-info">
            <img src={tempIcon} />
            <p>{degrees}ºC</p>
          </div>
          <div className="prev-card_rain prev-info">
            <img src={rainIcon} />
            <p>{rain}%</p>
          </div>
        </div>
      </div>
    </article>
  );
}
