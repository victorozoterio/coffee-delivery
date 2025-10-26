export const typingNumberMask = (number: string, maxCharacters?: number) => {
  let numericValue = number.replace(/\D/g, "");
  if (numericValue === "") numericValue = "0";

  numericValue = numericValue.replace(/^0+/, "");
  if (numericValue === "") numericValue = "0";

  numericValue = numericValue.slice(0, maxCharacters);
  return numericValue;
};
