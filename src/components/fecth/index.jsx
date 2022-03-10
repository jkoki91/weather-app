import { useEffect, useState, useContext } from "react";
import { CoordsContext } from "../../context/coords-context";


function WheatherInfo() {


    let [data, updateData] = useState([])
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Cordoba,ES&APPID=')
            .then(j => j.json())
            .then(r => updateData(r))
    }, [])
    console.log(data)
    return (
        <p>{JSON.stringify(data)}</p>
    )
}
export default WheatherInfo;

export const useCoords = async () => {
    const [city, setCity, latitude, setLatitude, longitude, setLongitude] = useContext(CoordsContext);
    const API_KEY = 'fd55d838139cc3180f89c425bfeb6eb4';
    const apiCity = `http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=2&appid=${API_KEY}`

    const res = await fetch(apiCity)
    const data = await res.json()

    console.log(data);
    const info = Object.entries(data[0]);
    console.log(info);
    const [, latCoord] = info[2];
    const [, lonCoord] = info[3];
    setLatitude(latCoord);
    setLongitude(lonCoord);


    // const { lat, lon } = info;
    // console.log(lat, lon);
    // console.log(Object.entries(data.find(d => d.country === 'ES')));

}