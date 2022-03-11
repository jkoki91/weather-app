import WheatherInfo from './components/fecth';
import './App.css';
import React from 'react';
import CoordsContextProvider from './context/coords-context-provider';
import TemperatureProvider from './context/temperature-provider';
import CurrentWeather from './components/current-weather';
import CurrentCard from './components/main-card';




function App() {
  console.log('hola');
  return (
    <React.Fragment>
      <TemperatureProvider>
        <CoordsContextProvider>
          {/* <WheatherInfo></WheatherInfo> */}
          <p>working</p>
          <CurrentCard></CurrentCard>
          <CurrentWeather></CurrentWeather>
        </CoordsContextProvider>
      </TemperatureProvider>

    </React.Fragment>

  );
}

export default App;
