import {ReactComponent as ClearD} from "../../assets/weather-icons/fluent_weather-sunny-16-filled.svg"
import {ReactComponent as FewCloudsD} from "../../assets/weather-icons/fluent_weather-partly-cloudy-day-16-filled.svg"
import {ReactComponent as ScatteredCloudsD} from "../../assets/weather-icons/fluent_weather-cloudy-20-filled.svg"
import {ReactComponent as ShowerRainD} from "../../assets/weather-icons/fluent_weather-rain-48-filled.svg"
import {ReactComponent as RainD} from "../../assets/weather-icons/fluent_weather-rain-showers-day-48-filled.svg"
import {ReactComponent as ThunderstormD} from "../../assets/weather-icons/fluent_weather-thunderstorm-24-filled.svg"
import {ReactComponent as SnowD} from "../../assets/weather-icons/fluent_weather-snow-shower-day-20-filled.svg"
import {ReactComponent as MistD} from "../../assets/weather-icons/fluent_weather-fog-24-filled.svg"
import {ReactComponent as FewCloudsN} from "../../assets/weather-icons/fluent_weather-partly-cloudy-night-24-filled.svg"
import {ReactComponent as RainN} from "../../assets/weather-icons/fluent_weather-rain-showers-night-24-filled.svg"


function WeatherIcon({color,type,width,height}){
    let Icon;
    switch(type){
        case '01d': Icon=ClearD; break;
        case '02d': Icon=FewCloudsD; break;
        case '03d': Icon=ScatteredCloudsD; break;
        case '04d': Icon=ScatteredCloudsD; break;
        case '09d': Icon=ShowerRainD; break;
        case '10d': Icon=RainD; break;
        case '11d': Icon=ThunderstormD; break;
        case '13d': Icon=SnowD; break;
        case '50d': Icon=MistD; break;
        case '01n': Icon=ClearD; break;
        case '02n': Icon=FewCloudsN; break;
        case '03n': Icon=ScatteredCloudsD; break;
        case '04n': Icon=ScatteredCloudsD; break;
        case '09n': Icon=ShowerRainD; break;
        case '10n': Icon=RainN; break;
        case '11n': Icon=ThunderstormD; break;
        case '13n': Icon=SnowD; break;
        case '50n': Icon=MistD; break;
             
    }
    return <Icon fill={color} width={width} height={height}></Icon>
}

export default WeatherIcon;