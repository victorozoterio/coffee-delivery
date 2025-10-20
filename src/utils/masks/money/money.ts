export const moneyMaskWithCurrency = (value?: number) => {
  if (!value) return "R$ 0,00";

  const formattedValue = Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formattedValue;
};

export const moneyMaskWithoutCurrency = (value?: number) => {
  if (!value) return "0,00";

  const formattedValue = Number(value).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedValue;
};
