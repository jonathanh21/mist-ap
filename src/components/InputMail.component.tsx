import React, {useState, ChangeEvent} from 'react';
import '../styles/Css/InputMail.component.css'
import {iInputMail, iMail} from '../models/components.interfaces'
/* git branch -m master main */


/**
 * PROPS
 * @name string, 
 * @placeholder string, 
 * @handleInputChange (name: string, value: string | number | null) => void
 */

const InputMailComponent = (props:iInputMail): JSX.Element => {
    const [mail, setMail] = useState<iMail>({
        mail: ""
    })

    const handleChange = (e: ChangeEvent) :void => {
        const {name, value} = (e.target as HTMLInputElement)
        if (value.length <= 60){
            setMail({
                mail: value
            })
            props.handleInputChange(name, value)
        }
    }

    return (
        <input type="text" onChange={handleChange} name={props.name} value={mail.mail} placeholder={props.placeholder}/>
    );
}

export default InputMailComponent;
