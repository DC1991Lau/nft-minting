import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <Link href="/">
        <h1 className="text-xl cursor-pointer">
          <strong>NFT</strong>minter
        </h1>
      </Link>
      <div className="flex space-x-5 ">
        <Link href="/">
          <div className="cursor-pointer hover:font-bold transition-all">
            Explore
          </div>
        </Link>
        <Link href="/create-nft">
          <div className="cursor-pointer hover:font-bold transition-all">
            Create
          </div>
        </Link>
      </div>
    </div>
  );
}
