import React, { useState } from 'react';
// import { ChangeEvent } from 'react'
import '../styles/InfoGeneral.css';

export function InfoGeneral(): JSX.Element {
  const [pass, setPass] = useState('');
  const [ok, setOk] = useState(true);
  const [type, setType] = useState('password');
  const regexp = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

  // const changing = (e: ChangeEvent<HTMLInputElement> | undefined ):void => {
  const changing = (e: any) => {
    setOk(!regexp.test(e.target.value));
    setPass(e.target.value);
  };

  // const submiting = (e: ChangeEvent<HTMLInputElement> | undefined ):void => {
  const submiting = (e: any) => {
    e.preventDefault();
    console.log(pass);
    setPass('');
    setOk(true);
  };

  const mostrarPass = (e: any): void => {
    e.preventDefault();
    if (type === 'password') setType('text');
    else if (type === 'text') setType('password');
    else setType('password');
  };

  const olvidoPass = (e: any): void => {
    e.preventDefault();
    console.log('Link a olvido Pass');
  };

  return (
    <form className='container'>
      <h2>Ingrese su Password</h2>
      <input
        type={type}
        name='password'
        placeholder='password'
        onChange={changing}
        value={pass}
      />
      <button onClick={mostrarPass}>Mostrar Pass</button>
      <button type='submit' onClick={submiting} disabled={ok}>
        Enviar
      </button>
      <br />
      <span>
        *Debe contener al menos una Mayuscula, una Minuscula, y un numero
      </span>
      <button onClick={olvidoPass}>Olvide mi Pass</button>
    </form>
  );
}
