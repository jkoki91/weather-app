import { vector } from '../../assets/weather-icons/vector.svg'
import { useContext } from 'react';
import { CoordsContext } from "../../context/coords-context";
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { getFetchWithCity, getFetchWithCoords, useFetchWithCity, useFetchWithCoords } from '../../custom-hook/useFetch';
import { useState } from 'react';
import { apiKey } from '../../key/key';
import { TemperatureContext } from "../../context/temperature-context";

function Filter() {
    const [data, setData, city, setCity, latitude, setLatitude, longitude, setLongitude] = useContext(CoordsContext);
    const [currentTemp, setCurrentTemp, units, setUnits] = useContext(TemperatureContext);
    const handler = e => {
        e.preventDefault()
        setCity(e.target.value)
        console.log(city)
        getFetchWithCity(city).then(c => {
            
            setLatitude(c.coord.lat)
            setLongitude(c.coord.lon)
            console.log(longitude,latitude)
        })
        // getFetchWithCity(e.target.buscador.value)
        getFetchWithCoords(latitude,longitude,units).then(c=>{
            console.log(c)
            setData(c)
            
        })
        
    }
    
    return (
        <Row xs={1} md={1} className="g-4">
            <Col md={10} xxl={5}>
                <Form onSubmit={handler}>
                    <Form.Control type="text" placeholder={`Mi ubicación`} name="buscador" />
                </Form>
            </Col>
        </Row>
    )
}

export default Filter;