import React from "react";
import WeatherIcon from '../weather-icon'
import './style.css'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Card from "react-bootstrap/Card";
import { useFetchWithCoords } from "../../custom-hook/useFetch";

function CurrentCard() {
    let WheatherInfo = useFetchWithCoords()
    let icon
    let temp
    let humidity
    let tempFeel
    let wind
    let UV

    return (
        <React.Fragment>
            <Row xs={1} md={2} className="g-4">
                <Col md={12} xxl={6} >
                    <Card className="card__container">
                        <Col md={4} xxl={4}>
                            <Card.Body>
                                <WeatherIcon type='sunny'></WeatherIcon>
                                <h3>15º</h3>
                                <img src=''></img>
                                <h6>10º</h6>
                                <p>Sensación</p>
                            </Card.Body>
                        </Col>
                        <Col md={8} xxl={8}>
                            <Card.Body>
                                <Card.Title>Ciudad</Card.Title>
                                <Card.Text>
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
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default CurrentCard;