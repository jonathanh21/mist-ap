export interface IselectProps {
  handleInputChange: (name: string, value: string | number | null) => void;
  selectValues: string[];
  inputType: string;
}

<<<<<<< HEAD
export interface IButton {
=======
export interface iButton {
>>>>>>> ae23cf0e6c790b90ae119ee2f5ee81553aabd2f2
  text: string,
  handleSubmit: () => void,
  isValid: boolean
}

<<<<<<< HEAD
export interface IInputMail {
=======
export interface iInputMail {
>>>>>>> ae23cf0e6c790b90ae119ee2f5ee81553aabd2f2
  name: string,
  placeholder: string,
  handleInputChange: (name: string, value: string | number | null) => void
}

<<<<<<< HEAD
export interface IMail {
=======
export interface iMail {
>>>>>>> ae23cf0e6c790b90ae119ee2f5ee81553aabd2f2
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