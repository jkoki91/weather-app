import { useState } from "react";
import { TemperatureContext } from "./temperature-context";

export default function TemperatureProvider({ children }) {

    const [currentTemp, setCurrentTemp] = useState('celsius')

    return (
        <TemperatureContext.Provider value={[currentTemp, setCurrentTemp]}>
            {children}
        </TemperatureContext.Provider>
    )
}