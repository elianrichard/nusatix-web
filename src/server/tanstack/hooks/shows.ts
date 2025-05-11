import { getShowsByEventId } from "@/server/axios/services/shows";
import { QueryKeys } from "../utils/queryKeys";

export const getShowsByEventIdQueryOption = (id: string) => {
  return {
    queryKey: [QueryKeys.SHOWS, id],
    queryFn: () => getShowsByEventId(id),
    enabled: !!id,
  };
};
