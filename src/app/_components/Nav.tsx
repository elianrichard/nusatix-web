"use client";
import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NusatixLogoFull from "@/assets/svgs/NusatixLogoFull";

import Button from "@/components/Button";
import MainLayout from "@/components/MainLayout";

import { cn } from "@/utils/ui";

const Nav = () => {
  const links = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/tickets",
      label: "Active Tickets",
    },
    {
      href: "/nfts",
      label: "NFTs",
    },
  ];
  return (
    <nav>
      <MainLayout isDisableVerticalPadding>
        <div className="flex items-center justify-between py-6">
          <NusatixLogoFull className="text-primary h-10" />
          <ul className="flex gap-16 text-lg">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </ul>
          <Button>Connect Wallet</Button>
        </div>
      </MainLayout>
    </nav>
  );
};
export default Nav;

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = useMemo(() => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  }, [href, pathname]);

  return (
    <li
      className={cn(
        "text-black transition-colors duration-300 ease-out",
        isActive && "text-primary font-bold",
      )}
    >
      <Link href={href}>{label}</Link>
    </li>
  );
};
