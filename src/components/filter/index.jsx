import { vector } from "../../assets/weather-icons/vector.svg";
import { useContext } from "react";
import { CoordsContext } from "../../context/coords-context";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {
    getFetchWithCity,
    getFetchWithCoords,
    useFetchWithCity,
    useFetchWithCoords,
} from "../../custom-hook/useFetch";
import { useState } from "react";
import { apiKey } from "../../key.js/key";
import { TemperatureContext } from "../../context/temperature-context";
import "./style.css";

function Filter() {

    const [
        data,
        setData,
        city,
        setCity,
        latitude,
        setLatitude,
        longitude,
        setLongitude,
    ] = useContext(CoordsContext);
    const [currentTemp, setCurrentTemp, units, setUnits] =
        useContext(TemperatureContext);

    const handler = (e) => {
        e.preventDefault();
        setCity(e.target.buscador.value);
    };

    const handleClickButton = () => {
        console.log("ahi la llevas");
    };

    return (
        <Row xs={1} md={1} className="g-4">
            {/* <Col md={12}> */}
            <Form className="d-flex flex-row-reverse" onSubmit={handler}>
                <form onSubmit={handleClickButton} className='form__button'>
                    <button className="button__ubication">
                        <svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.48495 0C2.59478 0 0.25293 2.229 0.25293 4.99C0.25293 9.764 5.48495 15.99 5.48495 15.99C5.48495 15.99 10.717 9.763 10.717 4.99C10.717 2.23 8.37512 0 5.48495 0ZM5.48495 7.751C4.73564 7.751 4.01701 7.46654 3.48717 6.96019C2.95732 6.45384 2.65966 5.76709 2.65966 5.051C2.65966 4.33492 2.95732 3.64816 3.48717 3.14181C4.01701 2.63546 4.73564 2.351 5.48495 2.351C6.23426 2.351 6.95289 2.63546 7.48273 3.14181C8.01258 3.64816 8.31024 4.33492 8.31024 5.051C8.31024 5.76709 8.01258 6.45384 7.48273 6.96019C6.95289 7.46654 6.23426 7.751 5.48495 7.751Z" fill="#868E96" />
                        </svg>
                    </button>
                </form>

                <Form.Control className="input" type="text" placeholder={`Mi ubicación`} name="buscador" /> 
            </Form>
            {/* </Col> */}
        </Row>
    );

}

export default Filter;
