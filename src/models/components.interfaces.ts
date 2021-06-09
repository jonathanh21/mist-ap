export interface IselectProps {
  handleInputChange: (name: string, value: string | number | null) => void;
  selectValues: string[];
  inputType: string;
}
