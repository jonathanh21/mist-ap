import React from 'react';
import StepsText from './components/StepsText.component';
import TitleText from './components/TitleText.component';
import { FormCrearCuenta } from './pages/CrearCuenta.page/components/FormCrearCuenta.component';

function App() {
  return (
    <div className='App'>
      <StepsText text='Paso 1 de 2' />
      <TitleText text='Viculación legal' />
      <FormCrearCuenta />
    </div>
  );
}

export default App;
