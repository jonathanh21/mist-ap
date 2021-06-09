import React, { useState } from 'react';
import SelectInput from './SelectInput';

interface Iinput {
  name: string;
  tel: string;
  email: string;
  idDoc: string;
  idType: string;
  idExpeditionDate: string;
  idExpirationDate: string;
  rating: number | null;
  type: string;
  userId: string;
  salonId: string;
}

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
