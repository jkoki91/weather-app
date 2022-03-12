
import "./App.css";
import "./index.css";
import React, { useContext } from "react";
import CoordsContextProvider from "./context/coords-context-provider";
import TemperatureProvider from "./context/temperature-provider";
import PrevisionCardsList from "./components/prevision-cards-list";
import ClothesRecommendation from "./components/clothes-recommendation";
import CurrentCard from "./components/main-card";
import { Container, Row, Col } from "react-bootstrap";
import LogoBrand from "./components/logo-brand";
import { CoordsContext } from "./context/coords-context";
import Header from "./components/header";
import SwitchDegrees from "./components/switch-degrees";
import Filter from './components/filter';



function App() {
  
  return (
    <div className="App">
      <TemperatureProvider>
        <CoordsContextProvider>
          <Header></Header>
          <LogoBrand></LogoBrand>
          <Filter></Filter>
          <CurrentCard></CurrentCard>
          <PrevisionCards></PrevisionCards>
    
          <SwitchDegrees></SwitchDegrees>
          <Container>
            <Row>
              <Col md={6}>
                <CurrentCard></CurrentCard>
                <PrevisionCardsList></PrevisionCardsList>
              </Col>
              <Col md={6}>
                <ClothesRecommendation></ClothesRecommendation>
              </Col>
            </Row>
          </Container>

        </CoordsContextProvider>
      </TemperatureProvider>
    </div>
  );
}

export default App;
