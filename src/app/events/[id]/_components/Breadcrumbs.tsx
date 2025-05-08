"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavigationRoutes } from "@/app/_static/constants";
import MainLayout from "@/components/MainLayout";

const Breadcrumbs = ({ id }: { id: string }) => {
  const pathname = usePathname();
  const isPaymentPage = pathname.includes("/payment");
  return (
    <MainLayout isAddTopPadding isDisableVerticalPadding>
      <div className="text-primary/60 text-h1 flex w-full font-serif font-bold">
        <Link href={NavigationRoutes.HOME}>Home</Link>
        <p>/</p>
        {!isPaymentPage ? (
          <p className="text-primary">Details</p>
        ) : (
          <>
            <Link href={`${NavigationRoutes.EVENTS}/${id}`}>Details</Link>
            <p>/</p>
            <p className="text-primary">Payment</p>
          </>
        )}
      </div>
    </MainLayout>
  );
};
export default Breadcrumbs;
