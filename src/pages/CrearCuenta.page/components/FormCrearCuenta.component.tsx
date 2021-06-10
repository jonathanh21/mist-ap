import React from 'react';
import SelectInput from '../../../components/SelectInput';
// import { Iinput } from "../models"

export function FormCrearCuenta() {
  //   const onSubmit = ():Iinput => {
  //   verificar que los inputs del select correspondan a sus valores unicos antes de enviar el POST a la DB
  //   }
  const handleInputChange = () => {};
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
    </div>
  );
}
