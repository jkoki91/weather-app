import { Container, Row, Col } from "react-bootstrap";
import WeatherIcon from "../weather-icon";
import tempIcon from "../../assets/weather-icons/temp.svg";
import "./style.css";


export default function PrevisionCards() {
  return (
    <section className="prev-card__container">
      <div className="prev-card__weather-icon">
        <WeatherIcon className="prev-card__wi" type="sunny"></WeatherIcon>
      </div>

      <div className="prev-card__info">
        <div>
          <h3 className="prev-card__date">Tuesday, 14 March</h3>
        </div>
        <div className="prev-card__temp-rain">
          <div className="prev-card_temp prev-info">
            <img src={tempIcon} />
            <p>12ºC</p>
          </div>
          <div className="prev-card_rain prev-info">
            <img src={tempIcon} />
            <p>10%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
