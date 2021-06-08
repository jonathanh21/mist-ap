import React from 'react';
import { TextField } from '@material-ui/core';

function InputExpDate(props:any) {
  console.log(Object.keys(props))
  return (
    <form noValidate>
        <TextField
            id="date"
            label="Fecha de expedición"
            type="date"
            defaultValue="DD/MM/AAAA"
            InputLabelProps={{
            shrink: true,
            }}
        />
        </form>
  );
}

export default InputExpDate;