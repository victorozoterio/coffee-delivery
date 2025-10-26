import { cepMask } from "./cep";
import { moneyMaskWithCurrency, moneyMaskWithoutCurrency } from "./money";
import { typingNumberMask } from "./number";

export const mask = {
  cep: cepMask,
  typingNumber: typingNumberMask,
  moneyWithCurrency: moneyMaskWithCurrency,
  moneyWithoutCurrency: moneyMaskWithoutCurrency,
};
