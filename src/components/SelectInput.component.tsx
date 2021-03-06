import React, { ChangeEvent } from 'react';
import { IselectProps } from '../models/components.interfaces';

function SelectInput({
  handleInputChange,
  selectValues,
  inputType,
}: {
  handleInputChange: IselectProps['handleInputChange'];
  selectValues: IselectProps['selectValues'];
  inputType: IselectProps['inputType'];
}) {
  return (
    <select
      className='selectInput'
      name={inputType}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        handleInputChange(e.target.name, e.target.value);
      }}
    >
      <option value='' disabled selected hidden>
        Por favor elija...
      </option>
      {selectValues.map((el, id) => {
        return (
          <option key={id} value={el}>
            {el}
          </option>
        );
      })}
    </select>
  );
}

export default SelectInput;
