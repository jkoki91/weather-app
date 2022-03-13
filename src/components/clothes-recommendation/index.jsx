import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import "./style.css";
import { CoordsContext } from "../../context/coords-context";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { TemperatureContext } from "../../context/temperature-context";

function importAll(r) {
  let clothes = {};
  r.keys().map((item, index) => {
    clothes[item.replace("./", "")] = r(item);
  });
  return clothes;
}

const clothes = importAll(
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
  const keys = Object.keys(clothes);
  const formalOutfits = [];
  const informalOutfits = [];
  const lowTemperatureOutfits = [[], []];
  const highTemperatureOutfits = [[], []];
  const rainOutfits = [[], []];
  console.log(temp);
  let weatherTemp = units === 'metric' ? temp : (temp -32 ) * 5/9
  const handleClickCasual = () => setOufitStyle("casual");

  const handleClickFormal = () => setOufitStyle("formal");

  keys.forEach((outfit) => {
    if (outfit.includes("informal")) informalOutfits.push(outfit);
    else formalOutfits.push(outfit);

    if (outfit.includes("10-10") && outfit.includes("informal")) lowTemperatureOutfits[0].push(outfit);
    if (outfit.includes("10-10") && outfit.includes("-formal")) lowTemperatureOutfits[1].push(outfit);

    if (outfit.includes("16-40") && outfit.includes("informal")) highTemperatureOutfits[0].push(outfit);
    if (outfit.includes("16-40") && outfit.includes("-formal")) highTemperatureOutfits[1].push(outfit);

    if (outfit.includes("lluvia") && outfit.includes("informal")) rainOutfits[0].push(outfit)
    if (outfit.includes("lluvia") && outfit.includes("-formal")) rainOutfits[1].push(outfit)
  });

  console.log('rain weather outfits', rainOutfits);
  console.log('low temperature outfits', lowTemperatureOutfits);
  console.log('high temperature outfits', highTemperatureOutfits);

  const randomPick = (outfitArray) => {
    const randomIndex = Math.floor(Math.random() * outfitArray.length);
    return outfitArray[randomIndex];
  };

  const selectOutfitByStyle = () => {
    let num = outfitStyle === 'casual' ? 0 : 1;
    const description = data.daily[0].weather[0].description;
    const isRainning = description.toLowerCase().includes("lluvia");
    if (weatherTemp < 5) return clothes[randomPick(lowTemperatureOutfits[num])];
    if (weatherTemp > 35) return clothes[randomPick(highTemperatureOutfits[num])];
    if (isRainning) return clothes[randomPick(rainOutfits[num])];
    if (outfitStyle === "casual") return clothes[randomPick(informalOutfits[num])];
    if (outfitStyle === "formal") return clothes[randomPick(formalOutfits[num])];
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
