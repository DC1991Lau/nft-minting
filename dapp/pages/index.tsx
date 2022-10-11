import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsThreeDots } from "react-icons/bs";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen grid grid-cols-2">
      <div className="flex flex-col px-5 py-5 flex-1 ">
        {/* navbar */}
        <div className="flex justify-between">
          <h1 className="text-xl">
            <strong>NFT</strong>minter
          </h1>
          <div className="flex space-x-5 cursor-pointer">
            <Link href="/">
              <div>Explore</div>
            </Link>
            <Link href="/">
              <div>Create</div>
            </Link>
          </div>
        </div>
        {/* title */}
        <div className="flex flex-1 flex-col space-y-10 justify-center ">
          <h1 className="text-7xl leading-tight">
            <strong>Mint</strong> your <br /> Web3 Creations
          </h1>
          <p className="text-base text-gray-500">
            You can quickly mint NFTs and create your own collections directly
            on Polygon Chain. Polygon Chain offers low fees, quick transcatio
            times, and has a growing NFT community
          </p>
          <Link href="/create-nft">
            <div className="flex items-center space-x-3 bg-black text-white py-3 px-4 rounded-full max-w-max cursor-pointer hover:bg-gray-800 transition-all">
              Mint NFT
              <span className="ml-3">
                <BsArrowRight />
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-1 align-middle justify-center px-5 py-5  ">
        <div className="flex bg-black flex-1 rounded-lg items-center justify-center"></div>
      </div>
    </div>
  );
};

export default Home;
