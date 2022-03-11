import React from "react";
import WeatherIcon from '../weather-icon'
import './style.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Card from "react-bootstrap/Card";
import { useFetchWithCoords } from "../../custom-hook/useFetch";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { CoordsContext } from "../../context/coords-context";
import { type } from "@testing-library/user-event/dist/type";

function CurrentCard() {
    // const [city, setCity, latitude, setLatitude, longitude, setLongitudes] = useContext(CoordsContext);
    
    let data = useFetchWithCoords();

    // let resume = data.current.weather[0]
    let clouds = data.current.clouds
    let temp = data.current.temp
    // let humidity =data.current.humidity
    // let tempFeel= data.current.feels_like
    // let UV = data.current.uvi
    // let speed= data.current.wind_speed
    // console.log(typeof clouds)
    console.log(clouds)
    console.log(temp)
    console.log(data)

    return (
        <>
         {data===null?'cargando':
        <React.Fragment>
            <Row xs={1} md={2} className="g-4">
                <Col md={12} xxl={6} >
                    <Card className="card__container">
                        <Col md={4} xxl={4}>
                            <Card.Body>
                                <WeatherIcon type='sunny'></WeatherIcon>
                                <h1>15º</h1>
                                <img src=''></img>
                                <h6>10º</h6>
                                <p>Sensación</p>
                            </Card.Body>
                        </Col>
                        <Col md={8} xxl={8}>
                            <Card.Body>
                                <Card.Title>Ciudad</Card.Title>
                                <Container>
                                    <p>Parcialmente nublado</p>
                                    <div className="card__info">
                                        <link rel="icon" ></link>
                                        <p>Viento</p>
                                        <p>200 km/h</p>
                                    </div>
                                    <div className="card__info">
                                        <link rel="icon"></link>
                                        <p>Humedad</p>
                                        <p>mucha</p>
                                    </div>
                                    <div className="card__info">
                                        <link rel="icon"></link>
                                        <p>indice UV</p>
                                        <p>poco</p>
                                    </div>
                                </Container>
                            </Card.Body>
                        </Col>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>}</>
       
        )
}

export default CurrentCard;