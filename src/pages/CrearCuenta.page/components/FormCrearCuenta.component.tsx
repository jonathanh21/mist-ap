import React, { useState } from 'react';
import SelectInput from '../../../components/SelectInput.component';
import LabelText from '../../../components/LabelText.component';

interface ItypeInput {
  type: string;
}

export function FormCrearCuenta() {
  const [input, setInput] = useState<ItypeInput>({
    type: '',
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
    <div className='inputContainer'>
      <LabelText text='Modalidad de Servicio' />
      <SelectInput
        handleInputChange={handleInputChange}
        selectValues={['independiente', 'salon']}
        inputType={'type'}
      />
    </div>
  );
}
