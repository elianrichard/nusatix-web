"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import NusatixLogoFull from "@/assets/svgs/brand/NusatixLogoFull";

import Button from "@/components/Button";
import HamburgerIcon from "@/components/HamburgerIcon";
import MainLayout from "@/components/MainLayout";

import { NavigationRoutes } from "@/static/constants/navigation";

import { cn } from "@/utils/ui";

import { NavLinks } from "../_static/constants";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 z-50 w-screen max-w-full bg-white",
        isOpen && "nav-open",
      )}
    >
      <MainLayout isDisableVerticalPadding>
        <div className="flex h-24 items-center justify-between md:h-28">
          <Link href={NavigationRoutes.HOME} onClick={() => setIsOpen(false)}>
            <NusatixLogoFull className="text-primary h-10" />
          </Link>
          <ul className="hidden gap-8 text-lg md:flex lg:gap-16">
            {NavLinks.map((link) => (
              <NavLinkItem
                key={link.href}
                href={link.href}
                label={link.label}
              />
            ))}
          </ul>
          <Button className="hidden md:block">Connect Wallet</Button>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Click here to open menu navigation bar"
            className="block cursor-pointer md:hidden"
          >
            <HamburgerIcon isOpen={isOpen} />
          </button>
        </div>
      </MainLayout>

      <div
        className={cn(
          "gap-lg text-blue absolute top-0 left-0 -z-10 flex h-screen w-full flex-col items-center bg-white pt-24 transition-opacity duration-300 ease-out md:hidden md:pt-28",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <MainLayout isDisableVerticalPadding>
          <div className="flex flex-col gap-14">
            <ul className="flex w-full flex-col items-center justify-start gap-12 py-6">
              {NavLinks.map((link) => (
                <NavLinkItem
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  className="flex justify-start"
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </ul>
            <div className="flex justify-center">
              <Button className="block md:hidden">Connect Wallet</Button>
            </div>
          </div>
        </MainLayout>
      </div>
    </nav>
  );
};
export default Nav;

const NavLinkItem = ({
  href,
  label,
  className,
  onClick,
}: {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}) => {
  const pathname = usePathname();
  const isActive = useMemo(() => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  }, [href, pathname]);

  return (
    <li
      className={cn(
        "hover:text-primary text-black transition-colors duration-300 ease-out",
        isActive && "text-primary font-bold",
        className,
      )}
    >
      <Link href={href} className="w-full" onClick={onClick}>
        {label}
      </Link>
    </li>
  );
};
