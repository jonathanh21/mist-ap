import React from 'react';
import SelectInput from '../../../components/SelectInput';
// import { Iinput } from "../models"

export function FormCrearCuenta() {
  //   const onSubmit = ():Iinput => {
  //   verificar que los inputs del select correspondan a sus valores unicos antes de enviar el POST a la DB
  //   }

  return (
    <div>
      <SelectInput
        selectValues={['independiente', 'salon']}
        inputType={'type'}
      />
      <SelectInput selectValues={['CC', 'NIT', 'CE']} inputType={'id_type'} />
    </div>
  );
}
