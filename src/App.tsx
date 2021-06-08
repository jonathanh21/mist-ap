import React from 'react';
import InputExpDate from "./components/InputExpDate.component"
import './App.css';
import { FormCrearCuenta } from "./components/FormCrearCuenta"

function App() {
  return (
    <div className='App'>
      <FormCrearCuenta />
      <InputExpDate />
    </div>
  );
}

export default App;
