import { apiKey } from "../key.js/key"


export const getFetchWithCity = async (citySearch) => {
        const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&lang=es&appid=${apiKey}`)
        const d = await r.json()
    return d
}

export const getFetchWithCoords = async (lat, lon, unit) => {
    const r = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&lang=es&appid=${apiKey}`)
    const d = await r.json()
    return d
}







