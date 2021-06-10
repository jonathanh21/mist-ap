import React, { useState } from 'react';
import '../styles/Css/index.css';
import {IInput, IPhone} from '../models/components.interfaces'


const InputPhone = (props: IInput): JSX.Element => {
  const [phone, setPhone] = useState<IPhone>({
    phone: '',
  });

  const handleInputPhone = (e: React.ChangeEvent): void => {
    let { name, value } = e.target as HTMLInputElement;

    const numero: any = value;

    const regEx = new RegExp(/^([0-9 ]+)*$/);
    const validated = regEx.test(value);

    if (validated && numero.length <= 11) {
      if (value.length === 4 && value[3] !== ' ') {
        value = value.slice(0, 3) + ' ' + value[3];
      }
      props.handleInputChange(name, value);
      setPhone({
        ...phone,
        phone: value,
      });

      console.log(value);
    }
  };

  return (
    <input
      type='text'
      name='tel'
      value={phone.phone}
      onChange={handleInputPhone}
      placeholder='Celular'
      required
    />
  );
};

export default InputPhone;