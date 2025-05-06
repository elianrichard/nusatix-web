import Link from "next/link";

import NusatixLogoFull from "@/assets/svgs/NusatixLogoFull";

import MainLayout from "@/components/MainLayout";

import { FooterLinks, SocialMediaLinks } from "../_static/constants";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <MainLayout isDisableVerticalPadding className="py-10">
        <div className="flex items-end justify-between">
          <div className="flex flex-col items-start gap-12">
            <NusatixLogoFull className="h-16" />
            <div className="grid grid-flow-col grid-rows-3 gap-x-36 gap-y-6">
              {FooterLinks.map((link, index) => (
                <Link href={link.href} key={`${link.href}-${index}`}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-white text-lg font-bold">Connect with us</p>
            <div className="flex justify-end gap-3">
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
