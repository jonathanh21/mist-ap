export interface Iinput {
  name: string;
  tel: string;
  email: string;
  idDoc: string;
  idType: string;
  idExpeditionDate: string;
  idExpirationDate: string;
  rating: number | null;
  type: string;
  userId: string;
  salonId: string;
}

export interface IselectProps {
  selectValues: string[];
  inputType: string;
}
