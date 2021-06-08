import React, { ChangeEvent, useState, useEffect } from 'react';
import { setState , getState  } from '../services/index';
import { IselectProps } from "../models"


function SelectInput({
  selectValues,
  inputType,
}: IselectProps) {
  
  const [input, setInput] = useState<string>("")

  useEffect(()=>{
      setState({
          ...getState(),
          input
      })
      console.log(input)
  },[input])

  // useEffect(()=>{
  //   stateObservable().subscribe(data=> console.log(data))
  // },[])

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>):void => {
    e.target.value?setInput(e.target.value):null
  }

  return (
    <select
      className='selectTipoDNI'
      name={inputType}
      onChange={handleSelectChange}
      defaultValue={input}
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