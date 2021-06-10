import React from 'react';
import { Link } from 'react-router-dom';
import StepsText from '../../components/StepsText.component';
import TitleText from '../../components/TitleText.component';
import FormVinculacionLegal from './components/FormVinculacionLegal.components';

export default function VinculacionLegal() {
  return (
    <div className='form'> 
        <StepsText text="Paso 2 de 2"/>
        <div className='legal'><TitleText text="Vinculación legal" /></div>
        <FormVinculacionLegal />
        <Link to="/"><button>Inicio</button></Link>
    </div>
  );
}

// revisar los estilos del TitleText (hardcodeado)