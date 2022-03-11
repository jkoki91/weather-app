import WheatherInfo from './components/fecth';
import './App.css';
import React from 'react';
import CoordsContextProvider from './context/coords-context-provider';
import TemperatureProvider from './context/temperature-provider';
import CurrentWeather from './components/current-weather';
import ClothesRecommendation from './components/clothes-recommendation';
import Button from 'react-bootstrap/Button';
import Header from './components/header';

function App() {
  console.log('hola');
  return (
    <React.Fragment>
      <TemperatureProvider>
        <CoordsContextProvider>
          <Header></Header>
          <CurrentWeather></CurrentWeather>
        </CoordsContextProvider>
      </TemperatureProvider>
    </React.Fragment>

  );
}

export default App;
