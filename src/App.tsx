import React from 'react';
import InputExpDate from './components/InputExpDate.component';
import './App.css';
import { FormCrearCuenta } from './components/FormCrearCuenta';
import { InfoGeneral } from './components/InfoGeneral';

function App() {
  return (
    <div className='App'>
      <FormCrearCuenta />
      <InputExpDate />
      <br />
      <hr />
      <InfoGeneral />
    </div>
  );
}

export default App;
