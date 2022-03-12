
import './App.css';
import './index.css'
import React from 'react';
import CoordsContextProvider from './context/coords-context-provider';
import TemperatureProvider from './context/temperature-provider';
import PrevisionCards from './components/prevision-cards';
import { useGeolocation } from './custom-hook/useGeolocation';

import CurrentCard from './components/main-card';

import Header from './components/header';

function App() {

  return (
    <div className="App">
      <TemperatureProvider>
        <CoordsContextProvider>
          <Header></Header>
          
          <CurrentCard></CurrentCard>
          <PrevisionCards></PrevisionCards>
        </CoordsContextProvider>
      </TemperatureProvider>
    </div>

  );
}

export default App;
