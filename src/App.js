import WheatherInfo from './components/fecth';
import './App.css';
import React from 'react';
import CoordsContextProvider from './context/coords-context-provider';
import TemperatureProvider from './context/temperature-provider';
import CurrentWeather from './components/current-weather';

function App() {
  console.log('hola');
  return (
    <React.Fragment>
      <TemperatureProvider>
        <CoordsContextProvider>
          {/* <WheatherInfo></WheatherInfo> */}
          <p>working</p>
          <CurrentWeather></CurrentWeather>
        </CoordsContextProvider>
      </TemperatureProvider>

    </React.Fragment>

  );
}

export default App;
