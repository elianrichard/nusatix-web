export const convertNumberToIdr = (number: number) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2,
  });
  return formatter.format(number);
};

export const roundToDecimal = (value: number, decimalPlaces = 2) => {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(value * factor) / factor;
};

export const simplifyAddress = (address?: string | null) => {
  if (!address) return "";
  return `${address.slice(0, 5)}...${address.slice(-4)}`;
};
