import { redirect } from "next/navigation";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getEventByIdQueryOption } from "@/server/tanstack/hooks/events";
import { getQueryClient } from "@/server/tanstack/utils/getQueryClient";

import { NavigationRoutes } from "@/static/constants/navigation";

import Breadcrumbs from "./_components/Breadcrumbs";

const EventDetailLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(getEventByIdQueryOption(id));

  const dehydratedState = dehydrate(queryClient);

  const eventData = queryClient.getQueryData(
    getEventByIdQueryOption(id).queryKey,
  );

  if (!eventData) redirect(NavigationRoutes.HOME);
  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="flex flex-col">
        <Breadcrumbs id={id} />
        {children}
      </div>
    </HydrationBoundary>
  );
};
export default EventDetailLayout;
