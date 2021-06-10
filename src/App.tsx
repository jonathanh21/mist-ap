import React from 'react';
// import InputExpDate from './components/InputExpDate.component';
import { FormCrearCuenta } from './pages/CrearCuenta.page/components/FormCrearCuenta.component';
// import './App.css';
import { InfoGeneral } from './components/InfoGeneral';

function App() {
  return (
    <div className='App'>
      <FormCrearCuenta />
      {/* <InputExpDate /> */}
      <br />
      <hr />
      <InfoGeneral />
    </div>
  );
}

export default App;
