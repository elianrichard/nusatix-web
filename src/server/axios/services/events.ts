import type { events } from "@prisma/client";
import axiosClient from "../client";

export const getEvents = async () => {
  try {
    const response = await axiosClient.get<events[]>(
      "/api/admin/events?active=true",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const getEventById = async (id: string) => {
  try {
    const response = await axiosClient.get<events>(`/api/admin/events/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching event by ID:", error);
    throw error;
  }
};
