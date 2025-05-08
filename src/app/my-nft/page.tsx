"use client";

import { useState } from "react";
import Image from "next/image";

import Button from "@/components/Button";
import EmptyState from "@/components/EmptyState";
import MainLayout from "@/components/MainLayout";
import Modal from "@/components/Modal";

import NFTCard from "./_components/NFTCard";
import { nftData } from "./_static/dummy";
import type { NFTCardProps } from "./_static/types";

export default function MyNFT() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState<NFTCardProps | null>(null);

  const handleCardClick = (nft: NFTCardProps) => {
    setSelectedNFT(nft);
    setModalOpen(true);
  };

  return (
    <MainLayout isAddTopPadding>
      <div className="flex flex-col gap-14 md:gap-24">
        <div className="flex w-full flex-col justify-between md:flex-row">
          <h1 className="text-primary font-serif text-4xl font-bold md:text-6xl">
            NFTs
          </h1>
          {nftData.length > 0 && (
            <div className="hidden flex-row items-center justify-center gap-10 md:flex">
              <Button variant="secondary">Transfer</Button>
              <Button variant="secondary">Receive</Button>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 md:gap-8">
          <h1 className="text-h1 text-center font-serif font-bold">
            My Collections
          </h1>
          {nftData.length > 0 ? (
            <div className="xs:grid-cols-2 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
              {nftData.map((nft, index) => (
                <div
                  key={index}
                  onClick={() => handleCardClick(nft)}
                  className="cursor-pointer"
                >
                  <NFTCard {...nft} />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-10">
              <EmptyState text="No NFTs Found" />
            </div>
          )}
        </div>

        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <div className="flex flex-col gap-2">
            <h2 className="text-h1 text-center font-bold">
              {selectedNFT?.title}
            </h2>
            <p className="text-h3 text-center opacity-60">
              {selectedNFT?.description}
            </p>
            <div className="relative aspect-square w-full">
              <Image
                src={selectedNFT?.nft ?? ""}
                alt={selectedNFT?.description ?? ""}
                fill
                className="h-full w-full"
              />
            </div>
          </div>
        </Modal>
      </div>
    </MainLayout>
  );
}
