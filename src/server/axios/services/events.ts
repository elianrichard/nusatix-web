import type { events } from "@prisma/client";
import axiosClient from "../client";

type getEventsResponse = events[];

export const getEvents = async () => {
  try {
    const response = await axiosClient.get<getEventsResponse>(
      "/api/admin/events?active=true",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};
