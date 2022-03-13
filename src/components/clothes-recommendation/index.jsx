import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import "./style.css";
import { CoordsContext } from "../../context/coords-context";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { TemperatureContext } from "../../context/temperature-context";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/clothes", false, /\.(png|jpe?g|svg)$/)
);

export default function ClothesRecommendation() {
  const [
    data,
    setData,
    city,
    setCity,
    latitude,
    setLatitude,
    longitude,
    setLongitude,
    counter,
    setCounter,
  ] = useContext(CoordsContext);

  const [currentTemp, setCurrentTemp, units, setUnits, temp, setTemp] =
    useContext(TemperatureContext);

  const [outfitStyle, setOufitStyle] = useState("casual");
  const keys = Object.keys(images);
  const formalOutfits = [];
  const informalOutfits = [];
  const lowTemperatureOutfits = [];
  const highTemperatureOutfits = [];
  const rainOutfits = [];

  const handleClickCasual = () => setOufitStyle("casual");

  const handleClickFormal = () => setOufitStyle("formal");

  keys.forEach((outfit) => {
    if (outfit.includes("informal")) informalOutfits.push(outfit);
    else formalOutfits.push(outfit);

    if (outfit.includes("10-10")) lowTemperatureOutfits.push(outfit);
    if (outfit.includes("16-40")) highTemperatureOutfits.push(outfit);
    if (outfit.includes("lluvia")) rainOutfits.push(outfit);
  });

  const randomPick = (outfitArray) => {
    const randomIndex = Math.floor(Math.random() * outfitArray.length);
    return outfitArray[randomIndex];
  };

  const selectOutfitByStyle = () => {
    const description = data.daily[0].weather[0].description;
    const isRainning = description.toLowerCase().includes("lluvia");

    if (temp < 10) return images[randomPick(lowTemperatureOutfits)];
    if (temp > 30) return images[randomPick(highTemperatureOutfits)];
    if (isRainning) return images[randomPick(rainOutfits)];
    if (outfitStyle === "casual") return images[randomPick(informalOutfits)];
    else return images[randomPick(formalOutfits)];
  };

  console.log(highTemperatureOutfits);
  console.log(lowTemperatureOutfits);
  return (
    <>
      {data === null || undefined ? (
        "cargando"
      ) : (
        <div>
          <Container className="clothes__buttons mb-1">
            <Button
              onClick={handleClickCasual}
              className="btn button-casual"
              variant="light"
            >
              Casual
            </Button>
            <Button
              onClick={handleClickFormal}
              className="btn button-formal"
              variant="dark"
            >
              Formal
            </Button>
          </Container>
          <Container>
            <Row>
              <Col xxl={6}>
                <Image className="main-img" src={selectOutfitByStyle()}></Image>
              </Col>
            </Row>

            <Container>
              <Row>
                <Col xxl={6}>
                  <div className="clothes-mini__container">
                    <Image
                      className="clothes-mini"
                      src={selectOutfitByStyle()}
                    ></Image>
                    <Image
                      className="clothes-mini"
                      src={selectOutfitByStyle()}
                    ></Image>
                    <Image
                      className="clothes-mini"
                      src={selectOutfitByStyle()}
                    ></Image>
                  </div>
                </Col>
              </Row>
            </Container>
          </Container>
        </div>
      )}
    </>
  );
}
