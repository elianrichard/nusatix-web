"use client"

import NFTCard from "@/components/NFTCard"
import Modal from "@/components/Modal";
import WhiteButton from "@/components/WhiteButton"
import { useState } from "react";
import type { NFTCardProps } from "@/components/NFTCard";

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

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState<NFTCardProps | null>(null);

  const handleCardClick = (nft: NFTCardProps) => {
    setSelectedNFT(nft);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col p-5 md:p-16">
      <div className="flex flex-col md:flex-row justify-between w-full py-8">
        <h1 className="font-serif text-primary text-2xl md:text-6xl font-bold">NFTs</h1>
        <div className="flex flex-row gap-10 justify-center md:justify-normal mt-8 md:mt-0">
          <WhiteButton caption="Transfer" href="/" />
          <WhiteButton caption="Receive" href="/" />
        </div>
      </div>

      <h1 className="font-serif text-xl md:text-4xl font-bold text-center pt-8 md:pt-16 pb-4 md:pb-8">My Collections</h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {nftData.map((nft, index) => (
          <div key={index} onClick={() => handleCardClick(nft)} className="cursor-pointer">
            <NFTCard {...nft} />
          </div>
        ))}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl md:text-3xl font-bold mb-2 text-center">{selectedNFT?.title}</h2>
        <p className="text-base md:text-xl opacity-60 text-center">{selectedNFT?.description}</p>
        <p className="text-sm mt-2 text-center font-light opacity-60">{selectedNFT?.date}</p>
        <img src={selectedNFT?.image} alt={selectedNFT?.title} className="mt-4 w-full rounded" />
      </Modal>
    </div>
  );
}
