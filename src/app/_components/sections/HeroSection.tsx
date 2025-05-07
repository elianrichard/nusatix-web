import NusatixWing from "@/assets/svgs/brand/NusatixWing";
import NusatixLogoText from "@/assets/svgs/NusatixLogoText";
import MainLayout from "@/components/MainLayout";

const HeroSection = () => {
  return (
    <MainLayout isDisableHorizontalPadding isDisableVerticalPadding>
      <div className="flex w-full items-center justify-center overflow-hidden pb-10 md:pb-20">
        <NusatixWing className="w-80 min-w-52 translate-x-10 md:translate-x-16 xl:w-96" />
        <div className="flex flex-col gap-4 text-center xl:gap-8">
          <NusatixLogoText className="max-w-96 min-w-52 md:w-full xl:w-96 xl:max-w-none" />
          <p className="text-h1 text-primary font-serif font-bold">Web3</p>
        </div>
        <NusatixWing className="w-80 min-w-52 -translate-x-10 -scale-x-100 md:-translate-x-16 xl:w-96" />
      </div>
    </MainLayout>
  );
};
export default HeroSection;
