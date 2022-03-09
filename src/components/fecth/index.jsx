import { useEffect, useState } from "react";

function WheatherInfo() {
    let [data, updateData] = useState([])
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Cordoba,ES&APPID=1f7689b2591acb5efd5d91b7e124bf44')
          .then(j => j.json())
          .then(r => updateData(r))
    }, [])
    console.log(data)
    return(
        <p>{JSON.stringify(data)}</p>
    )
}
export default WheatherInfo;