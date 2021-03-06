import React, { useState } from 'react';
import SelectInput from '../../../components/SelectInput.component';

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
    <div className="inputContainer">
      <label>Modalidad de Servicio</label>
      <SelectInput
        handleInputChange={handleInputChange}
        selectValues={['independiente', 'salon']}
        inputType={'type'}
      />

    </div>
  );
}
