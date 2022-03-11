import WheatherInfo from './components/fecth';
import './App.css';
import React from 'react';
import CoordsContextProvider from './context/coords-context-provider';
import TemperatureProvider from './context/temperature-provider';
import CurrentWeather from './components/current-weather';
<<<<<<< HEAD
import CurrentCard from './components/main-card';



=======
import ClothesRecommendation from './components/clothes-recommendation';
import Button from 'react-bootstrap/Button';
import Header from './components/header';
>>>>>>> develop

function App() {
  console.log('hola');
  return (
    <React.Fragment>
      <TemperatureProvider>
        <CoordsContextProvider>
<<<<<<< HEAD
          {/* <WheatherInfo></WheatherInfo> */}
          <p>working</p>
          <CurrentCard></CurrentCard>
=======
          <Header></Header>
>>>>>>> develop
          <CurrentWeather></CurrentWeather>
        </CoordsContextProvider>
      </TemperatureProvider>
    </React.Fragment>

  );
}

export default App;
