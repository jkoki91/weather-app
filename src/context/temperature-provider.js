import { useState } from "react";
import { TemperatureContext } from "./temperature-context";

export default function TemperatureProvider({ children }) {

    const [currentTemp, setCurrentTemp] = useState('ºC')
    let [units, setUnits] = useState('metric')
    let [temp, setTemp] = useState(null)

    return (
        <TemperatureContext.Provider value={[currentTemp, setCurrentTemp, units, setUnits, temp, setTemp]}>
            {children}
        </TemperatureContext.Provider>
    )
}