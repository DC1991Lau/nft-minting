import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { NFTCard } from "../components/NFTCard";
import { UploadForm } from "../components/UploadForm";

interface MetadataProps {
  name: string;
  description: string;
  image?: string | undefined;
  attributes?: string[];
}

const MintNFTPage: NextPage = () => {
  const [nftMetadata, setNFTMetadata] = useState<MetadataProps>({
    name: "",
    description: "",
    image: "",
  });
  return (
    <div className="w-screen h-screen grid grid-cols-2">
      <div className="flex flex-col px-5 py-5 flex-1 ">
        <Navbar />
        <div className="mt-9 flex flex-1 flex-col space-y-10">
          <h2 className="text-2xl">
            Create your <strong>NFT</strong>
          </h2>
          <UploadForm
            setNFTMetadata={setNFTMetadata}
            nftMetadata={nftMetadata}
          />
        </div>
      </div>
      <div className="flex flex-1 align-middle justify-center px-5 py-5">
        <div className="flex bg-black flex-1 rounded-2xl items-center justify-center">
          <NFTCard
            name={nftMetadata.name}
            mediaURL={nftMetadata.image}
            description={nftMetadata.description}
          />
        </div>
      </div>
    </div>
  );
};

export default MintNFTPage;
