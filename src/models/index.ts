export interface IinputCore {
  name: string;
  tel: string;
  email: string;
  idDoc: string;
  idType: string;
  rating: number | null;
  type: string;
  userId: string;
}

export interface IinputIndependiente extends IinputCore {
  idExpeditionDate: string;
  idExpeditionCity: string;
  idExpirationDate: string;
}

export interface IinputSalon extends IinputCore {
  reason: string;
  legalName: string;
  legalIdDoc: string;
  legalIdType: string;
}

export interface IselectProps {
  selectValues: string[];
  inputType: string;
}
