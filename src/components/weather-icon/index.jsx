import {ReactComponent as Sunny} from "../../assets/weather-icons/fluent_weather-cloudy-20-filled.svg"



function WeatherIcon({color='red',type}){
    let Icon;
    switch(type){
        case 'sunny': Icon=Sunny; break;

        
    }
    return <Icon fill={color}></Icon>
}

export default WeatherIcon;