import Button from "@/components/Button";
import MainLayout from "@/components/MainLayout";
import Link from "next/link";

const TopSection = () => {
  return (
    <MainLayout isAddTopPadding>
      <div className="flex flex-col items-start gap-6 text-left md:items-center md:gap-8 md:text-center">
        <div className="flex flex-col items-start gap-2 md:items-center">
          <p className="text-h2 text-primary font-serif font-bold">
            Nusatix - Explore, Earn, and Belong.
          </p>
          <h1 className="text-primary font-serif text-5xl font-bold md:text-7xl xl:text-8xl">
            Exploring Nusantara
          </h1>
        </div>
        <p className="text-h3 max-w-5xl leading-loose text-balance text-black/60">
          Nusatix is a Web3 ticketing platform that lets you explore
          Indonesia&apos;s cultural and local experiences while earning unique
          digital rewards. Each event you attend becomes part of your on-chain
          identity, with secure, scalper-free access and collectible NFTs tied
          to real-world moments. With Nusatix, you don&apos;t just visit — you
          belong.
        </p>
        <Link href="https://x.com/nusatixbynewtn" target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">Join Our Community</Button>
        </Link>      </div>
    </MainLayout>
  );
};
export default TopSection;
