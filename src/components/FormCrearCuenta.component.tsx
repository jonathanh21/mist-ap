import React, { useState } from 'react';
import SelectInput from './SelectInput';
import { Iinput } from '../models';

export function FormCrearCuenta() {
  const [input, setInput] = useState<Iinput>({
    name: '',
    tel: '',
    email: '',
    idDoc: '',
    idType: '',
    idExpeditionDate: '',
    idExpirationDate: '',
    rating: null,
    type: '',
    userId: '',
    salonId: '',
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
      <SelectInput
        handleInputChange={handleInputChange}
        selectValues={['independiente', 'salon']}
        inputType={'type'}
      />
      <SelectInput
        handleInputChange={handleInputChange}
        selectValues={['CC', 'NIT', 'CE']}
        inputType={'id_type'}
      />
      Nombre Celular Correo Electronico
    </div>
  );
}
