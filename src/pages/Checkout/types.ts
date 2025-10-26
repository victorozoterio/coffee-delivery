export enum PaymentMethod {
  CREDIT_CARD = "credit-card",
  DEBIT_CARD = "debit-card",
  CASH = "cash",
}

export interface AddressData {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  uf: string;
}

