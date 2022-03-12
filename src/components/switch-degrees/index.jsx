import "./style.css";
import React, { useContext } from "react";
import { TemperatureContext } from "../../context/temperature-context";

export default function SwitchDegrees() {
    const [currentTemp, setCurrentTemp, units, setUnits] = useContext(TemperatureContext)
    const handleChecked = () => {
        if (currentTemp === 'ºC') {
            setUnits('imperial')
            setCurrentTemp('Fº')
        } else {
            setCurrentTemp('ºC')
            setUnits('metric')
        }
    }

  return (
    <section className="switch-container">
      <div>
        <label className="switch">
          <input onChange={handleChecked} type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <div>{currentTemp}</div>
    </section>
  );
}
