import React, { useState } from 'react';
import InputTextNameAlphaNum from '../../../components/InputTextNameAlphaNum.component';
import InputTextNameAlpha from '../../../components/InputTextNameAlpha.component';
import DefaultInput from '../../../components/DefaultInput.component';
import { IInputSalon } from '../../../models';
import InputPhone from '../../../components/InputPhone.component';
import InputMailComponent from '../../../components/InputMail.component';
import ButtonComponent from '../../../components/Button.component';

function FormIndependienteInfoGeneral() {
  const [input, setInput] = useState<IInputSalon>({
    name: '',
    tel: '',
    email: '',
    idDoc: '',
    idType: '',
    rating: null,
    type: '',
    userId: '',
    reason: '',
    legalName: '',
    legalIdDoc: '',
    legalIdType: '',
  });

  const handleInputChange = (
    name: string,
    value: string | number | null
  ): void => {
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="inputContainer">
        <label>Nombre</label>
        <InputTextNameAlpha name="name" placeholder="Nombre Apellido" handleInputChange={handleInputChange}/>
      </div>
      <div className="inputContainer">
        <label>Celular</label>
        <InputPhone handleInputChange={handleInputChange}/>
      </div>
      <div className="inputContainer">
        <label>Correo electrónico</label>
        <InputMailComponent name="email" placeholder="Ingresa tu corre electrónico" handleInputChange={handleInputChange}/>
      </div>
      <div className="inputContainer">
        <DefaultInput placeholder="Documento"/>
      </div>
      <div className="inputContainer">
        <DefaultInput placeholder="Ciudad de expedición"/>
      </div>
      <div className="inputContainer">
        <DefaultInput placeholder="Fecha de expedición"/>
      </div>
      <div className="inputContainer">
        <label>Usuario</label> 
        <InputTextNameAlphaNum name="user" placeholder="Ingresa el nombre de usuario" handleInputChange={handleInputChange}/>
      </div>
      <div className="buttonCrear">
        <ButtonComponent text="Continuar" handleSubmit={()=>{}} isValid={true}/>
      </div>
    </div>
  );
}

// El input de usuario no se encuentra en el model de partner

export default FormIndependienteInfoGeneral;