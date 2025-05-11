import { queryOptions } from "@tanstack/react-query";
import { getEvents } from "@/server/axios/services/events";
import { QueryKeys } from "../utils/queryKeys";

export const getEventsQueryOption = () => {
  return queryOptions({
    queryKey: QueryKeys.GET_EVENTS,
    queryFn: getEvents,
  });
};
