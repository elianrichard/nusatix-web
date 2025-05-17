import { useMutation } from "@tanstack/react-query";
import {
  getUserTickets,
  mintTicket,
  prepareTicket,
  type TicketPreparationResponse,
} from "@/server/axios/services/tickets";
import { QueryKeys } from "../utils/queryKeys";

export const getTicketsQueryOptions = (id?: string) => {
  return {
    queryKey: [...QueryKeys.TICKETS, id],
    queryFn: () => getUserTickets(id ?? ""),
    enabled: !!id,
  };
};

export const usePrepareTicketMutation = ({
  onSuccess,
}: {
  onSuccess: (response: TicketPreparationResponse) => void;
}) => {
  return useMutation({
    mutationKey: ["prepare"],
    mutationFn: prepareTicket,
    onSuccess: (data) => {
      onSuccess(data);
    },
  });
};

export const useMintTicketMutation = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  return useMutation({
    mutationKey: ["mint"],
    mutationFn: mintTicket,
    onSuccess,
    onSettled: onSuccess,
  });
};
