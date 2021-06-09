import React, { useState } from 'react';
import SelectInput from '../../../components/SelectInput';
import { IinputSalon } from '../../../models';

function FormSalonInfoGeneral() {
  const [input, setInput] = useState<IinputSalon>({
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
      Nombre Razon Social
      <SelectInput
        handleInputChange={handleInputChange}
        selectValues={['CC', 'NIT', 'CE']}
        inputType={'id_type'}
      />
      Documento Representante Legal
      <SelectInput
        handleInputChange={handleInputChange}
        selectValues={['CC', 'NIT', 'CE']}
        inputType={'id_type'}
      />
      Celular Correo Electronico
    </div>
  );
}

export default FormSalonInfoGeneral;
