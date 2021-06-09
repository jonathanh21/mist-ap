import React, { ChangeEvent, useState } from 'react';
import '../styles/Css/index.css';

interface InputString {
  name: string;
  placeholder: string;
  handleInputChange: (name: string, value: string | number | null) => void;
}

/**
 * PROPS
 * @name string
 * @placeholder string
 * @handleInputChange (name: string, value: string | number | null) => void
 */

const InputTextNameAlpha = (props: InputString): JSX.Element => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target as HTMLInputElement;
    const regex = /^[a-zA-Z\s]*$/;
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
        value={text}
        type='text'
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    </>
  );
};

export default InputTextNameAlpha;
