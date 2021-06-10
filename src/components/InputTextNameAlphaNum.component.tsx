import React, { ChangeEvent, useState } from 'react';
import '../styles/Css/index.css';
import {InputString} from '../models/components.interfaces'

/**
 * PROPS
 * @name string
 * @placeholder string
 * @handleInputChange (name: string, value: string | number | null) => void
 */

const InputTextNameAlphaNum = (props: InputString): JSX.Element => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target as HTMLInputElement;

    const regex = /^[0-9a-zA-Z\s]*$/;
    const isValid = regex.test(value);
    if (isValid) {
      setText(value);
      props.handleInputChange(name, value);
    }
  };

  return (
    <>
      <input
        name={props.name}
        type='text'
        placeholder={props.placeholder}
        onChange={handleChange}
        value={text}
      />
    </>
  );
};

export default InputTextNameAlphaNum;
