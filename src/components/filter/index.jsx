import { vector } from '../../assets/weather-icons/vector.svg'
import { useContext } from 'react';
import { CoordsContext } from "../../context/coords-context";
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useFetchWithCity } from '../../custom-hook/useFetch';
import { useState } from 'react';
import { apiKey } from '../../key/key';

function Filter() {
    const [city, setCity, latitude, setLatitude, longitude, setLongitude] = useContext(CoordsContext);
    
    const handler = e => {
        e.preventDefault()
        setCity(e.target.buscador.value)
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},&limit=2&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                console.log('prueba')
                const info = Object.entries(data[0])
                const [, latCoord] = info[2]
                setLatitude(latCoord)
                const [, lonCoord] = info[3]
                setLongitude(lonCoord)
            })
    
        console.log(city)
    }

    return (
        <Row xs={1} md={1} className="g-4">
            <Col md={10} xxl={5}>
                <Form onSubmit={handler}>
                    <Form.Control type="text" placeholder={` Mi ubicación`} name="buscador" />
                </Form>
            </Col>
        </Row>
    )
}

export default Filter;