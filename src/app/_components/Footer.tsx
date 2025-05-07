import Link from "next/link";

import NusatixLogoFull from "@/assets/svgs/brand/NusatixLogoFull";

import MainLayout from "@/components/MainLayout";

import { FooterLinks, SocialMediaLinks } from "../_static/constants";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <MainLayout isDisableVerticalPadding className="py-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col items-start gap-12">
            <NusatixLogoFull className="w-full max-w-72" />
            <div className="grid grid-cols-1 gap-x-36 gap-y-6 text-lg sm:grid-flow-col sm:grid-rows-3">
              {FooterLinks.map((link, index) => (
                <Link href={link.href} key={`${link.href}-${index}`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-white text-lg font-bold">Connect with us</p>
            <div className="flex gap-3 md:justify-end">
              {SocialMediaLinks.map((link, index) => (
                <Link
                  href={link.href}
                  key={`${link.href}-${index}`}
                  target="_blank"
                  aria-label={link.name}
                  className="bg-primary-shadow aspect-square w-14 rounded-[20px] p-3"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-7">
          <div className="h-[1px] w-full bg-white" />
          <p className="text-xl">Nusatix &copy;2025</p>
        </div>
      </MainLayout>
    </footer>
  );
};
export default Footer;
