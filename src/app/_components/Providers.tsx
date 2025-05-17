"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import useInitializeWeb3 from "@/hooks/useInitializeWeb3";
import { getQueryClient } from "@/server/tanstack/utils/getQueryClient";

export default function Providers({ children }: { children: React.ReactNode }) {
  useInitializeWeb3();
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
