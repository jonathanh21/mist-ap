export interface IselectProps {
  handleInputChange: (name: string, value: string | number | null) => void;
  selectValues: string[];
  inputType: string;
}

export interface iButton {
  text: string,
  handleSubmit: () => void,
  isValid: boolean
}

export interface iInputMail {
  name: string,
  placeholder: string,
  handleInputChange: (name: string, value: string | number | null) => void
}

export interface iMail {
  mail: string
}

export interface InputString {
  name: string;
  placeholder: string;
  handleInputChange: (name: string, value: string | number | null) => void;
}

export interface IInput {
  handleInputChange: (name: string, value: string | number | null) => void;
}

export interface IPhone {
  phone: string;
}