import React, { useEffect } from "react";
import WeatherIcon from "../weather-icon";
import "./style.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import {
  useFetchWithCoords,
  useFetchWithCity,
} from "../../custom-hook/useFetch";
import {
  getFetchWithCoords,
  getFetchWithCity,
} from "../../custom-hook/useFetch";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { CoordsContext } from "../../context/coords-context";
import { type } from "@testing-library/user-event/dist/type";
import { useGeolocation } from "../../custom-hook/useGeolocation";
import { TemperatureContext } from "../../context/temperature-context";
import PrevisionCardsList from "../prevision-cards-list";

function CurrentCard() {
  const [
    data,
    setData,
    city,
    setCity,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    currentCity,
    setCurrentCity,
    counter,
    setCounter,
  ] = useContext(CoordsContext);
  const [currentTemp, setCurrentTemp, units, setUnits, temp, setTemp] =
    useContext(TemperatureContext);
  useGeolocation();

  const getTimeDescription = () => {
    const description = data.daily[0].weather[0].description;
    const parsedDescription = description.charAt(0).toUpperCase() + description.slice(1);
    return parsedDescription;
  };

  useEffect(() => {
    getFetchWithCity(city).then((c) => {
      setLatitude(c.coord.lat);
      setLongitude(c.coord.lon);
      setCurrentCity(c.name);
    });
  }, [city]);

  useEffect(() => {
    if (latitude && longitude) {
      getFetchWithCoords(latitude, longitude, units).then((c) => {
        setTemp(c.daily[counter].temp.day);
        setData(c);
      });
    }
  }, [latitude, units]);

  return (
    <>
      {data === null || undefined ? (
        "cargando"
      ) : (
        <React.Fragment>
          <Row xs={1} md={2} className="g-4">
            {/* <Col md={24} xxl={12} > */}
            <Card className="card__container">
              <Col md={6} xxl={6}>
                <Card.Body className="first__info">
                  <WeatherIcon
                    type={data.daily[counter].weather[0].icon}
                    color="#7198A9"
                    width="72"
                    height="62"
                  ></WeatherIcon>
                  <h1>
                    {Math.round(data.daily[counter].temp.day)}
                    {" " + currentTemp}
                  </h1>

                  <svg
                    width="12"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.8976 8.69998C12.8976 8.46128 12.8027 8.23236 12.634 8.06358C12.4652 7.8948 12.2363 7.79998 11.9976 7.79998C11.7589 7.79998 11.53 7.8948 11.3612 8.06358C11.1924 8.23236 11.0976 8.46128 11.0976 8.69998L11.1 14.574C10.5836 14.7828 10.156 15.1648 9.89044 15.6543C9.62484 16.1439 9.53777 16.7106 9.64416 17.2573C9.75055 17.804 10.0438 18.2967 10.4736 18.6509C10.9034 19.0051 11.443 19.1988 12 19.1988C12.5569 19.1988 13.0966 19.0051 13.5264 18.6509C13.9562 18.2967 14.2494 17.804 14.3558 17.2573C14.4622 16.7106 14.3751 16.1439 14.1095 15.6543C13.8439 15.1648 13.4163 14.7828 12.9 14.574L12.8976 8.69998ZM7.79997 6.59998V6.59758C7.81858 5.49675 8.26895 4.44731 9.05402 3.67541C9.83908 2.90351 10.896 2.47095 11.997 2.47095C13.0979 2.47095 14.1549 2.90351 14.9399 3.67541C15.725 4.44731 16.1754 5.49675 16.194 6.59758V13.3992C16.8364 14.1916 17.2413 15.1499 17.3617 16.1629C17.482 17.176 17.3129 18.2024 16.874 19.1233C16.4351 20.0442 15.7443 20.822 14.8816 21.3665C14.0188 21.911 13.0195 22.2 11.9994 22.2C10.9792 22.2 9.97989 21.911 9.11718 21.3665C8.25447 20.822 7.56365 20.0442 7.12473 19.1233C6.6858 18.2024 6.51672 17.176 6.63708 16.1629C6.75743 15.1499 7.16229 14.1916 7.80477 13.3992C7.80477 11.3148 7.79517 8.62318 7.79517 6.59998H7.79997ZM9.59997 6.59758C9.59397 9.09358 9.60477 11.592 9.60477 14.0892L9.36477 14.3484C8.88733 14.8616 8.57011 15.503 8.45202 16.1939C8.33394 16.8849 8.42012 17.5952 8.70001 18.2379C8.9799 18.8805 9.4413 19.4275 10.0276 19.8116C10.6139 20.1958 11.2996 20.4004 12.0006 20.4004C12.7015 20.4004 13.3872 20.1958 13.9735 19.8116C14.5598 19.4275 15.0212 18.8805 15.3011 18.2379C15.581 17.5952 15.6672 16.8849 15.5491 16.1939C15.431 15.503 15.1138 14.8616 14.6364 14.3484L14.3952 14.0892V6.59758C14.3952 5.96169 14.1426 5.35186 13.6929 4.90222C13.2433 4.45258 12.6335 4.19998 11.9976 4.19998C11.3617 4.19998 10.7518 4.45258 10.3022 4.90222C9.85257 5.35186 9.59997 5.96169 9.59997 6.59758Z"
                      fill="#333333"
                    />
                  </svg>
                  <h6>
                    {Math.round(data.daily[counter].feels_like.day)}
                    {" " + currentTemp}
                  </h6>
                  <p>Sensación</p>
                </Card.Body>
              </Col>
              <Col md={12} xxl={12}>
                <Card.Body>
                  <Card.Title className="card__title">
                    <h2>
                      {currentCity.charAt(0).toUpperCase() +
                        currentCity.slice(1)}
                    </h2>
                  </Card.Title>
                  <Container>
                    <p className="card__description">{getTimeDescription()}</p>
                    <div className="card__info">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.7481 9.49407C19.5896 9.50117 20.3955 9.83431 20.9965 10.4234C21.5974 11.0125 21.9465 11.8117 21.9703 12.6529C21.9942 13.4941 21.6909 14.3117 21.1243 14.9339C20.5576 15.5561 19.7718 15.9343 18.9321 15.9891L18.7321 15.9941L18.6161 16.0011H17.8291C17.9391 16.3111 17.9991 16.6451 17.9991 16.9941C17.9991 18.6581 16.7371 20.0001 15.0731 20.0001C13.7731 20.0001 12.8381 19.3721 12.3851 18.3731C12.2791 18.1407 12.2661 17.8765 12.3487 17.6348C12.4312 17.3931 12.6032 17.1922 12.8292 17.0732C13.0552 16.9543 13.3182 16.9263 13.5642 16.9951C13.8102 17.0638 14.0205 17.2241 14.1521 17.4431L14.2501 17.6321C14.3901 17.8741 14.6231 18.0001 15.0731 18.0001C15.6031 18.0001 15.9981 17.5801 15.9981 16.9941C15.9981 16.4831 15.6051 16.0581 15.0941 16.0011H3.00009C2.74366 16.0031 2.49625 15.9065 2.30898 15.7313C2.12172 15.5561 2.00893 15.3157 1.99391 15.0597C1.97888 14.8037 2.06279 14.5517 2.22827 14.3558C2.39376 14.1599 2.62818 14.035 2.88309 14.0071L3.00009 14.0021H14.8591L14.9761 13.9951C15.0391 13.9951 15.1021 13.9971 15.1651 14.0011L18.6271 14.0021L18.6871 13.9971L18.7471 13.9951L18.8761 13.9891C19.0923 13.9662 19.2989 13.8873 19.4753 13.7602C19.6517 13.6331 19.7919 13.4622 19.8821 13.2643C19.9723 13.0664 20.0093 12.8485 19.9894 12.6319C19.9696 12.4154 19.8936 12.2078 19.769 12.0296C19.6443 11.8514 19.4754 11.7088 19.2788 11.6159C19.0822 11.523 18.8648 11.4829 18.648 11.4997C18.4312 11.5166 18.2225 11.5896 18.0426 11.7117C17.8627 11.8339 17.7178 12.0008 17.6221 12.1961L17.5251 12.4221C17.4087 12.6476 17.2109 12.8204 16.9719 12.9055C16.7328 12.9906 16.4703 12.9817 16.2376 12.8804C16.0049 12.7792 15.8194 12.5933 15.7186 12.3604C15.6179 12.1275 15.6095 11.865 15.6951 11.6261C15.9249 11.0013 16.3409 10.4621 16.8868 10.0812C17.4327 9.7003 18.0824 9.49607 18.7481 9.49607V9.49407ZM11.7501 12.0001H3.00009C2.74366 12.0021 2.49625 11.9055 2.30898 11.7303C2.12172 11.5551 2.00893 11.3147 1.99391 11.0587C1.97888 10.8027 2.06279 10.5507 2.22827 10.3548C2.39376 10.1589 2.62818 10.034 2.88309 10.0061L3.00009 10.0001H11.7501C12.1951 10.0001 12.6301 9.86811 13.0001 9.62087C13.3701 9.37364 13.6585 9.02224 13.8288 8.6111C13.9991 8.19997 14.0437 7.74757 13.9569 7.31111C13.87 6.87466 13.6558 6.47375 13.3411 6.15908C13.0264 5.84441 12.6255 5.63012 12.189 5.5433C11.7526 5.45648 11.3002 5.50104 10.8891 5.67134C10.4779 5.84164 10.1265 6.13002 9.87929 6.50003C9.63205 6.87004 9.50009 7.30506 9.50009 7.75007C9.50009 8.01528 9.39474 8.26964 9.2072 8.45717C9.01966 8.64471 8.76531 8.75007 8.50009 8.75007C8.23488 8.75007 7.98052 8.64471 7.79299 8.45717C7.60545 8.26964 7.50009 8.01528 7.50009 7.75007C7.49998 6.91944 7.74328 6.10699 8.19991 5.41313C8.65653 4.71928 9.30647 4.17444 10.0694 3.84596C10.8323 3.51748 11.6748 3.41976 12.4926 3.56488C13.3105 3.71 14.0679 4.09159 14.6712 4.6625C15.2745 5.2334 15.6973 5.96859 15.8874 6.77719C16.0774 7.58578 16.0263 8.43234 15.7405 9.21222C15.4546 9.99211 14.9464 10.6711 14.2788 11.1653C13.6112 11.6596 12.8135 11.9473 11.9841 11.9931L11.7501 12.0001H3.00009H11.7501Z"
                          fill="#333333"
                        />
                      </svg>
                      <p>Viento</p>
                      <p>{Math.round(data.daily[counter].wind_speed)}</p>
                    </div>
                    <div className="card__info">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.47 2.22007C11.6106 2.07962 11.8012 2.00073 12 2.00073C12.1988 2.00073 12.3894 2.07962 12.53 2.22007C12.933 2.62307 14.529 4.34707 16.029 6.58207C17.509 8.78507 19 11.6351 19 14.2501C19 16.7741 18.254 18.7291 16.956 20.0561C15.659 21.3801 13.889 22.0001 12 22.0001C10.11 22.0001 8.341 21.3811 7.044 20.0561C5.746 18.7291 5 16.7741 5 14.2501C5 11.6351 6.492 8.78507 7.971 6.58207C9.471 4.34707 11.067 2.62207 11.47 2.22007Z"
                          fill="#333333"
                        />
                      </svg>
                      <p>Humedad</p>
                      <p>{data.daily[counter].humidity}</p>
                    </div>
                    <div className="card__info">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 1.5C12.1989 1.5 12.3897 1.57902 12.5303 1.71967C12.671 1.86032 12.75 2.05109 12.75 2.25V3.75C12.75 3.94891 12.671 4.13968 12.5303 4.28033C12.3897 4.42098 12.1989 4.5 12 4.5C11.8011 4.5 11.6103 4.42098 11.4697 4.28033C11.329 4.13968 11.25 3.94891 11.25 3.75V2.25C11.25 2.05109 11.329 1.86032 11.4697 1.71967C11.6103 1.57902 11.8011 1.5 12 1.5ZM12 16.5C13.1935 16.5 14.3381 16.0259 15.182 15.182C16.0259 14.3381 16.5 13.1935 16.5 12C16.5 10.8065 16.0259 9.66193 15.182 8.81802C14.3381 7.97411 13.1935 7.5 12 7.5C10.8065 7.5 9.66193 7.97411 8.81802 8.81802C7.97411 9.66193 7.5 10.8065 7.5 12C7.5 13.1935 7.97411 14.3381 8.81802 15.182C9.66193 16.0259 10.8065 16.5 12 16.5ZM21.75 12.75C21.9489 12.75 22.1397 12.671 22.2803 12.5303C22.421 12.3897 22.5 12.1989 22.5 12C22.5 11.8011 22.421 11.6103 22.2803 11.4697C22.1397 11.329 21.9489 11.25 21.75 11.25H20.25C20.0511 11.25 19.8603 11.329 19.7197 11.4697C19.579 11.6103 19.5 11.8011 19.5 12C19.5 12.1989 19.579 12.3897 19.7197 12.5303C19.8603 12.671 20.0511 12.75 20.25 12.75H21.75ZM12 19.5C12.1989 19.5 12.3897 19.579 12.5303 19.7197C12.671 19.8603 12.75 20.0511 12.75 20.25V21.75C12.75 21.9489 12.671 22.1397 12.5303 22.2803C12.3897 22.421 12.1989 22.5 12 22.5C11.8011 22.5 11.6103 22.421 11.4697 22.2803C11.329 22.1397 11.25 21.9489 11.25 21.75V20.25C11.25 20.0511 11.329 19.8603 11.4697 19.7197C11.6103 19.579 11.8011 19.5 12 19.5ZM3.75 12.75C3.94891 12.75 4.13968 12.671 4.28033 12.5303C4.42098 12.3897 4.5 12.1989 4.5 12C4.5 11.8011 4.42098 11.6103 4.28033 11.4697C4.13968 11.329 3.94891 11.25 3.75 11.25H2.25C2.05109 11.25 1.86032 11.329 1.71967 11.4697C1.57902 11.6103 1.5 11.8011 1.5 12C1.5 12.1989 1.57902 12.3897 1.71967 12.5303C1.86032 12.671 2.05109 12.75 2.25 12.75H3.75ZM4.719 4.719C4.78867 4.64915 4.87143 4.59374 4.96255 4.55593C5.05367 4.51812 5.15135 4.49866 5.25 4.49866C5.34865 4.49866 5.44633 4.51812 5.53745 4.55593C5.62857 4.59374 5.71133 4.64915 5.781 4.719L7.281 6.219C7.35073 6.28873 7.40605 6.37152 7.44379 6.46262C7.48152 6.55373 7.50095 6.65138 7.50095 6.75C7.50095 6.84862 7.48152 6.94627 7.44379 7.03738C7.40605 7.12848 7.35073 7.21127 7.281 7.281C7.21127 7.35073 7.12848 7.40605 7.03738 7.44379C6.94627 7.48152 6.84862 7.50095 6.75 7.50095C6.65138 7.50095 6.55373 7.48152 6.46262 7.44379C6.37152 7.40605 6.28873 7.35073 6.219 7.281L4.719 5.781C4.64915 5.71133 4.59374 5.62857 4.55593 5.53745C4.51812 5.44633 4.49866 5.34865 4.49866 5.25C4.49866 5.15135 4.51812 5.05367 4.55593 4.96255C4.59374 4.87143 4.64915 4.78867 4.719 4.719ZM5.781 19.281C5.71137 19.3507 5.62868 19.4061 5.53766 19.4438C5.44664 19.4816 5.34908 19.5011 5.25053 19.5012C5.15198 19.5012 5.05439 19.4819 4.96332 19.4442C4.87225 19.4066 4.78948 19.3514 4.71975 19.2817C4.65002 19.2121 4.59468 19.1294 4.55691 19.0384C4.51913 18.9474 4.49965 18.8498 4.49958 18.7513C4.49951 18.6527 4.51885 18.5551 4.5565 18.4641C4.59415 18.373 4.64937 18.2902 4.719 18.2205L6.219 16.7205C6.28863 16.6508 6.37132 16.5954 6.46234 16.5577C6.55336 16.5199 6.65092 16.5004 6.74947 16.5003C6.84802 16.5003 6.94561 16.5196 7.03668 16.5573C7.12775 16.5949 7.21052 16.6501 7.28025 16.7197C7.34998 16.7894 7.40532 16.8721 7.44309 16.9631C7.48087 17.0541 7.50035 17.1517 7.50042 17.2502C7.50049 17.3488 7.48115 17.4464 7.4435 17.5374C7.40585 17.6285 7.35063 17.7113 7.281 17.781L5.781 19.281ZM19.281 4.719C19.2113 4.64915 19.1286 4.59374 19.0374 4.55593C18.9463 4.51812 18.8487 4.49866 18.75 4.49866C18.6513 4.49866 18.5537 4.51812 18.4626 4.55593C18.3714 4.59374 18.2887 4.64915 18.219 4.719L16.719 6.219C16.5782 6.35983 16.4991 6.55084 16.4991 6.75C16.4991 6.94916 16.5782 7.14017 16.719 7.281C16.8598 7.42183 17.0508 7.50095 17.25 7.50095C17.4492 7.50095 17.6402 7.42183 17.781 7.281L19.281 5.781C19.3508 5.71133 19.4063 5.62857 19.4441 5.53745C19.4819 5.44633 19.5013 5.34865 19.5013 5.25C19.5013 5.15135 19.4819 5.05367 19.4441 4.96255C19.4063 4.87143 19.3508 4.78867 19.281 4.719ZM18.219 19.281C18.3596 19.4218 18.5504 19.501 18.7495 19.5012C18.9485 19.5013 19.1394 19.4224 19.2803 19.2817C19.4211 19.1411 19.5003 18.9503 19.5004 18.7513C19.5006 18.5523 19.4216 18.3613 19.281 18.2205L17.781 16.7205C17.6404 16.5797 17.4496 16.5005 17.2505 16.5003C17.0515 16.5002 16.8606 16.5791 16.7197 16.7197C16.5789 16.8604 16.4997 17.0512 16.4996 17.2502C16.4994 17.4492 16.5784 17.6402 16.719 17.781L18.219 19.281Z"
                          fill="black"
                        />
                      </svg>
                      <p>Indice UV</p>
                      <p>{data.daily[counter].uvi}</p>
                      <p>
                        {data.daily[counter].uvi > 3
                          ? data.daily[counter].uvi > 6
                            ? "alto"
                            : "Medio"
                          : "Bajo"}
                      </p>
                    </div>
                  </Container>
                </Card.Body>
              </Col>
            </Card>
            {/* </Col> */}
          </Row>
          <PrevisionCardsList></PrevisionCardsList>
        </React.Fragment>
      )}
    </>
  );
}

export default CurrentCard;
