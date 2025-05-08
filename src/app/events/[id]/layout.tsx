import Breadcrumbs from "./_components/Breadcrumbs";

const EventDetailLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <div className="flex flex-col">
      <Breadcrumbs id={id} />
      {children}
    </div>
  );
};
export default EventDetailLayout;
