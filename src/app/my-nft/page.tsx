import NFTCard from "@/components/NFTCard"
import WhiteButton from "@/components/WhiteButton"

export default function MyNFT() {
  const nftData = [
    {
      title: "Indonesian NFTs 1.1",
      description: "Acquired from Tari Kecak, Bali",
      date: "July 18, 2024",
      image: "/NFT 1.1.svg"
    },
    {
      title: "Indonesian NFTs 1.2",
      description: "Acquired from Wayang Kulit, Java",
      date: "August 5, 2024",
      image: "/NFT 1.2.svg"
    },
    {
      title: "Indonesian NFTs 1.3",
      description: "Acquired from Toraja, Sulawesi",
      date: "September 12, 2024",
      image: "/NFT 1.3.svg"
    },
    {
        title: "Indonesian NFTs 1.1",
        description: "Acquired from Tari Kecak, Bali",
        date: "July 18, 2024",
        image: "/NFT 1.1.svg"
      },
      {
        title: "Indonesian NFTs 1.2",
        description: "Acquired from Wayang Kulit, Java",
        date: "August 5, 2024",
        image: "/NFT 1.2.svg"
      },
      {
        title: "Indonesian NFTs 1.3",
        description: "Acquired from Toraja, Sulawesi",
        date: "September 12, 2024",
        image: "/NFT 1.3.svg"
      },
      {
        title: "Indonesian NFTs 1.1",
        description: "Acquired from Tari Kecak, Bali",
        date: "July 18, 2024",
        image: "/NFT 1.1.svg"
      },
      {
        title: "Indonesian NFTs 1.2",
        description: "Acquired from Wayang Kulit, Java",
        date: "August 5, 2024",
        image: "/NFT 1.2.svg"
      },
      {
        title: "Indonesian NFTs 1.3",
        description: "Acquired from Toraja, Sulawesi",
        date: "September 12, 2024",
        image: "/NFT 1.3.svg"
      },
      {
        title: "Indonesian NFTs 1.1",
        description: "Acquired from Tari Kecak, Bali",
        date: "July 18, 2024",
        image: "/NFT 1.1.svg"
      },
      {
        title: "Indonesian NFTs 1.2",
        description: "Acquired from Wayang Kulit, Java",
        date: "August 5, 2024",
        image: "/NFT 1.2.svg"
      },
      {
        title: "Indonesian NFTs 1.3",
        description: "Acquired from Toraja, Sulawesi",
        date: "September 12, 2024",
        image: "/NFT 1.3.svg"
      },
  ];

  return (
    <div className="flex flex-col p-16">
      <div className="flex flex-row justify-between w-full py-8">
        <h1 className="font-serif text-primary text-6xl font-bold">NFTs</h1>
        <div className="flex flex-row gap-10">
          <WhiteButton caption="Transfer" href="/" />
          <WhiteButton caption="Receive" href="/" />
        </div>
      </div>

      <h1 className="font-serif text-4xl font-bold text-center pt-16 pb-8">My Collections</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {nftData.map((nft, index) => (
          <NFTCard key={index} {...nft} />
        ))}
      </div>
    </div>
  );
}
