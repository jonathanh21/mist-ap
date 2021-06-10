import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import StepsText from '../../components/StepsText.component';
import TitleText from '../../components/TitleText.component';
import { FormCrearCuenta } from './components/FormCrearCuenta.component';
import FormIndependienteInfoGeneral from './components/FormIndependienteInfoGeneral.component';
import FormSalonInfoGeneral from './components/FormSalonInfoGeneral.component';

export default function CrearCuenta() {
const [activeForm, setActiveForm] = useState<'salon'|'independiente'|null>(null)

const handleClick: React.MouseEventHandler<HTMLButtonElement>  = (e):void => {
  const flag = activeForm === 'salon'? 'independiente':'salon';
  setActiveForm(flag)
}
  return (
    <div className='form'>
      {activeForm === null?null:<StepsText text="Paso 1 de 2"/>}
      {activeForm === null?<div className="crear"><TitleText text="Crear cuenta" /></div>:<div className='infoGeneral'><TitleText text="Informacion general" /></div>}
      <FormCrearCuenta />
      {activeForm === 'salon'? <FormSalonInfoGeneral />:activeForm === 'independiente'? <FormIndependienteInfoGeneral />:null}
      <div className="buttonsContainer">
        <button onClick={handleClick}>Switch</button>
        <Link to="/Registrarse/Legal"><button>Done!</button></Link>
      </div> 
    </div>
  );
}
