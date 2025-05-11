import { queryOptions } from "@tanstack/react-query";
import { getEventById, getEvents } from "@/server/axios/services/events";
import { QueryKeys } from "../utils/queryKeys";

export const getEventsQueryOption = () => {
  return queryOptions({
    queryKey: QueryKeys.GET_EVENTS,
    queryFn: getEvents,
  });
};

export const getEventByIdQueryOption = (id: string) => {
  return queryOptions({
    queryKey: [...QueryKeys.GET_EVENTS, id],
    queryFn: () => getEventById(id),
    enabled: !!id,
  });
};
