import React from 'react';
import '../styles/Css/index.css';
import { iButton } from '../models/components.interfaces';

/**
 *
 * props -> text, handleSubmit, isValid
 * @text debe ser un string
 * @handleSubmit debe ser un callback
 * @isValid debe ser un boolean
 */

const ButtonComponent = (props: iButton) => {
  return (
    <div
      className={props.isValid ? 'button isValid' : 'button'}
      onClick={props.handleSubmit}
    >
      {props.text}
    </div>
  );
};

export default ButtonComponent;
