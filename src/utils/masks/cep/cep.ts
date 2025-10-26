export const cepMask = (cep: string) => {
  const cleanedCep = cep.replace(/\D/g, "");

  return cleanedCep.replace(/^(\d{5})(\d{3})$/, "$1-$2");
};
