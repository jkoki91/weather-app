import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import "./style.css";
import { CoordsContext } from "../../context/coords-context";
import { useContext } from "react";
import Button from "react-bootstrap/Button";

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
//   const [
//     data,
//     setData,
//     city,
//     setCity,
//     latitude,
//     setLatitude,
//     longitude,
//     setLongitude,
//   ] = useContext(CoordsContext);
  const [outfitStyle, setOufitStyle] = useState("casual");
  const keys = Object.keys(images);
  const formalOutfits = [];
  const informalOutfits = [];

  const handleClickCasual = () => setOufitStyle('casual');

  const handleClickFormal = () => setOufitStyle('formal');

  keys.forEach((outfit) => {
    if (outfit.includes("-formal")) formalOutfits.push(outfit);
    else informalOutfits.push(outfit);
  });

  const randomPick = (outfitArray) => {
    const randomIndex = Math.floor(Math.random() * outfitArray.length);
    console.log(outfitArray[randomIndex]);
    console.log(randomIndex);
    return outfitArray[randomIndex]
  }

  const selectOutfitByStyle = () => {
      if(outfitStyle === 'casual') return images[randomPick(informalOutfits)]
      else return images[randomPick(formalOutfits)]
  }

//   const temp = data.current.temp;

  console.log(informalOutfits);
  return (
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
            <Image
              className="main-img"
              src={selectOutfitByStyle()}
            ></Image>
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
  );
}
