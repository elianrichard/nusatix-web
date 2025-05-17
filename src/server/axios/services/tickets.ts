import axiosClient from "../client";

export interface UserTicket {
  ticket_id: number;
  nft_mint_address: string;
  nft_name: string;
  nft_image_url: string;
  purchased_at: Date;
  event_name: string;
  show_name: string;
  show_date: Date;
  show_start_time: string;
}

export interface TicketPreparationResponse {
  message: string;
  ticket_id: number;
  metadata_ipfs_cid: string;
  nft_image_url: string;
  sol_price: string;
  idr_price: number;
}

export interface TicketMintResponse {
  message: string;
  ticket: Ticket;
}

export interface Ticket {
  ticket_id: number;
  show_id: number;
  owner_wallet_address: string;
  nft_mint_address: string;
  nft_metadata_url: string;
  nft_name: string;
  nft_image_url: string;
  purchase_price_sol: string;
  purchase_price_idr: number;
  seat_info: null;
  is_checked_in: boolean;
  purchased_at: Date;
  show: Show;
}

export interface Show {
  show_id: number;
  event_id: number;
  show_name: string;
  show_date: Date;
  show_start_time: string;
  show_end_time: string;
  sol_price: string;
  metadata_template_ipfs_cid: string;
  total_tickets: number;
  tickets_sold: number;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export const getUserTickets = async (userId: string) => {
  const response = await axiosClient.get<UserTicket[]>(
    `/api/tickets/users/${userId}`,
  );
  return response.data;
};

export const prepareTicket = async (show_id: string) => {
  const response = await axiosClient.post<TicketPreparationResponse>(
    `/api/tickets/prepare`,
    {
      show_id,
    },
  );
  return response.data;
};

export const mintTicket = async ({
  ticket_id,
  user_wallet_address,
}: {
  ticket_id: number;
  user_wallet_address: string;
}) => {
  const response = await axiosClient.post<TicketMintResponse>(
    `/api/tickets/finalize`,
    {
      ticket_id,
      user_wallet_address,
    },
  );
  return response.data;
};
