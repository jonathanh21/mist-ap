import React from 'react';
import '../styles/Css/index.css';

export interface Idefault {
    placeholder: string;
}
  
/**
 * PROPS
 * @placeholder string
 */

const DefaultInput = (props: Idefault): JSX.Element => {
  
  return (
    <>
    <label>{props.placeholder}</label>
      <input
        placeholder={props.placeholder}
      />
    </>
  );
};

export default DefaultInput;