import axios from "axios";

type SolanaIdrConversionResponse = {
  solana: {
    idr: number;
  };
};

export const getSolanaIdrConversionRate = async () => {
  const response = await axios.get<SolanaIdrConversionResponse>(
    "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=idr",
  );
  return response.data;
};
