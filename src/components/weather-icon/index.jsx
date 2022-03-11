import {ReactComponent as Sunny} from "../../assets/weather-icons/fluent_weather-cloudy-20-filled.svg"
// import {ReactComponent as ClearD} from "../../assets/weather-icons/fluent_weather-sunny-16-filled.svg"


function WeatherIcon({color='red',type}){
    let Icon;
    switch(type){
        case 'sunny': Icon=Sunny; break;
        // case '02d': Icon=FewCloudsD; break;
        // case '03d': Icon=ScatteredCloudsD; break;
        // case '04d': Icon=BrokenCloudsD; break;
        // case '09d': Icon=ShowerRainD; break;
        // case '10d': Icon=RainD; break;
        // case '11d': Icon=ThunderstormD; break;
        // case '13d': Icon=SnowD; break;
        // case '50d': Icon=MistD; break;
        // case '01n': Icon=ClearN; break;
        // case '02n': Icon=FewClounsN; break;
        // case '03n': Icon=ScatterenClounsN; break;
        // case '04n': Icon=BrokenClounsN; break;
        // case '09n': Icon=ShowerRainN; break;
        // case '10n': Icon=RainN; break;
        // case '11n': Icon=ThunnerstormN; break;

        // case '13n': Icon=SnowN; break;
        // case '50n': Icon=MistN; break;
             
    }
    return <Icon fill={color}></Icon>
}

export default WeatherIcon;