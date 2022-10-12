import type { NextPage } from "next";
import Link from "next/link";
import { motion } from "framer-motion";

import { BsArrowRight } from "react-icons/bs";

import Navbar from "../components/Navbar";
import { NFTCard } from "../components/NFTCard";

let animationProps = {
  animate: {
    rotateY: [0, 180, 360],
    // rotateY: [0, 0, 180, 180, 0],
  },
  transition: {
    duration: 7,
    yoyo: Infinity,
  },
};

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen grid grid-cols-2">
      <div className="flex flex-col px-5 py-5 flex-1 ">
        {/* navbar */}
        <Navbar />
        {/* title */}
        <div className="flex flex-1 flex-col space-y-10 justify-center ">
          <h1 className="text-7xl leading-tight">
            <strong>Mint</strong> your <br /> Web3 Creations
          </h1>
          <p className="text-base text-gray-500">
            You can quickly turn your{" "}
            <strong className="text-black">digital creations</strong> in{" "}
            <strong className="text-black">NFTs</strong> directly on Polygon
            Chain.
            <br /> Polygon Chain offers low fees, quick transcatio times, and
            has a growing NFT community
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
      <div className="flex flex-1 align-middle justify-center px-5 py-5">
        <div className="flex bg-black flex-1 rounded-2xl items-center justify-center">
          <motion.div {...animationProps}>
            <NFTCard
              name="Bored Ape"
              date="12/10/2022"
              mediaURL="bored-ape.png"
              tokenId={256}
              collectionName="Borde Apes"
              description="My bored ape is awesome"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
