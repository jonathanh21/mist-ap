import React from 'react';

import Julian from './components/Julian';
import Valentin from './components/Valentin';
import Probando from './components/Probando';
import Jonathan from './components/jonathan';
import { FormCrearCuenta } from './components/FormCrearCuenta';
import './App.css';
function App() {
  return (
    <div className='App'>
      <Julian />
      <Valentin />
      <Probando />
      <Jonathan />
      <FormCrearCuenta />
    </div>
  );
}

export default App;
