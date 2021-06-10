import React from 'react';
import ButtonComponent from '../../../components/Button.component';
import DefaultInput from '../../../components/DefaultInput.component';

function FormVinculacionLegal() {

  return (
    <div>
        <div className="inputContainer">
            <DefaultInput placeholder="Numero de referencia del contrato"/>
        </div>
        <div className="inputContainer">
            <DefaultInput placeholder="Fecha del contrato"/>
        </div>
        <div className="inputContainer">
            <DefaultInput placeholder="Tasa de comision"/>
        </div>
        <div className="inputContainer">
            <DefaultInput placeholder="Tiempo de prueba"/>
        </div>
        <div className="buttonCrear">
        <ButtonComponent text="Continuar" handleSubmit={()=>{}} isValid={true}/>
      </div>
    </div>
  );
}

export default FormVinculacionLegal;