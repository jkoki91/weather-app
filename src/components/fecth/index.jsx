import { useEffect, useState } from "react";

function WheatherInfo() {
    let [data, updateData] = useState([])
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Cordoba,ES&APPID=')
          .then(j => j.json())
          .then(r => updateData(r))
    }, [])
    console.log(data)
    return(
        <p>{JSON.stringify(data)}</p>
    )
}
export default WheatherInfo;