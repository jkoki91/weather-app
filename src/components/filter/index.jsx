import { vector } from '../../assets/weather-icons/vector.svg'
import { useContext } from 'react';
import { CoordsContext } from "../../context/coords-context";
import Col from 'react-bootstrap/Col';
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { useFetchWithCity } from '../../custom-hook/useFetch';

function Filter() {
    const [city, setCity, latitude, setLatitude, longitude, setLongitudes] = useContext(CoordsContext);
    const handler = e => {
        e.preventDefault()
        setCity(e.target.buscador.value)
        // console.log(e.target.buscador.value)
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