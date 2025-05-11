import type { shows } from "@prisma/client";
import axiosClient from "../client";

export const getShowsByEventId = async (id: string) => {
  try {
    const response = await axiosClient.get<shows[]>(
      `/api/admin/shows?eventId=${id}&active=true`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching shows by event ID:", error);
    throw error;
  }
};
