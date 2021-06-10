export interface IselectProps {
  handleInputChange: (name: string, value: string | number | null) => void;
  selectValues: string[];
  inputType: string;
}

export interface IButton {
  text: string,
  handleSubmit: () => void,
  isValid: boolean
}

export interface IInputMail {
  name: string,
  placeholder: string,
  handleInputChange: (name: string, value: string | number | null) => void
}

export interface IMail {
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