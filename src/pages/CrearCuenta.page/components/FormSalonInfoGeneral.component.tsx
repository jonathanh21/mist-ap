import React, { useState } from 'react';
import InputTextNameAlphaNum from '../../../components/InputTextNameAlphaNum.component';
import InputTextNameAlpha from '../../../components/InputTextNameAlpha.component';
import DefaultInput from '../../../components/DefaultInput.component';
import { IInputSalon } from '../../../models';
import InputPhone from '../../../components/InputPhone.component';
import InputMailComponent from '../../../components/InputMail.component';
import ButtonComponent from '../../../components/Button.component';
import LabelText from '../../../components/LabelText.component';

function FormSalonInfoGeneral() {
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
      <div className='inputContainer'>
        <LabelText text='Nombre del negocio' />
        <InputTextNameAlphaNum
          name='name'
          placeholder='Nombre del negocio'
          handleInputChange={handleInputChange}
        />
      </div>
      <div className='inputContainer'>
        <LabelText text='Razon Social' />
        <InputTextNameAlpha
          name='reason'
          placeholder='Razon Social'
          handleInputChange={handleInputChange}
        />
      </div>
      <div className='inputContainer'>
        <DefaultInput placeholder='Documento' />
      </div>
      <div className='inputContainer'>
        <LabelText text='Representante Legal' />
        <InputTextNameAlpha
          name='legalName'
          placeholder='Representante Legal'
          handleInputChange={handleInputChange}
        />
      </div>
      <div className='inputContainer'>
        <DefaultInput placeholder='Identificacion del Representante Legal' />
      </div>
      <div className='inputContainer'>
        <LabelText text='Celular' />
        <InputPhone handleInputChange={handleInputChange} />
      </div>
      <div className='inputContainer'>
        <LabelText text='Correo electrónico' />
        <InputMailComponent
          name='email'
          placeholder='Ingresa tu corre electrónico'
          handleInputChange={handleInputChange}
        />
      </div>
      <div className='inputContainer'>
        <LabelText text='Usuario' />
        <InputTextNameAlphaNum
          name='user'
          placeholder='Ingresa el nombre de usuario'
          handleInputChange={handleInputChange}
        />
      </div>
      <div className='buttonCrear'>
        <ButtonComponent
          text='Continuar'
          handleSubmit={() => {}}
          isValid={true}
        />
      </div>
    </div>
  );
}

// El input de usuario no se encuentra en el model de partner

export default FormSalonInfoGeneral;
