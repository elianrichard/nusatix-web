import { queryOptions } from "@tanstack/react-query";
import { getSolanaIdrConversionRate } from "@/server/axios/services/coins";
import { QueryKeys } from "../utils/queryKeys";

export const getSolanaIdrConversionRateQueryOption = () => {
  return queryOptions({
    queryKey: [...QueryKeys.CONVERSION_RATE],
    queryFn: getSolanaIdrConversionRate,
    refetchInterval: 1000,
  });
};
