
import './App.css';
import React from 'react';
import CoordsContextProvider from './context/coords-context-provider';
import TemperatureProvider from './context/temperature-provider';
import CurrentWeather from './components/current-weather';

import CurrentCard from './components/main-card';

import Header from './components/header';

function App() {
  console.log('hola');
  return (
    <React.Fragment>
      <TemperatureProvider>
        <CoordsContextProvider>
          <Header></Header>
          <p>working</p>
          <CurrentCard></CurrentCard>
          <CurrentWeather></CurrentWeather>
        </CoordsContextProvider>
      </TemperatureProvider>
    </React.Fragment>

  );
}

export default App;
