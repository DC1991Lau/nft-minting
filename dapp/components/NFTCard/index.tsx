import React from "react";
import { motion } from "framer-motion";
import { BsThreeDots } from "react-icons/bs";

interface NFTCardProps {
  mediaURL: string | undefined;
  collectionName?: string;
  tokenId?: number;
  name: string;
  description: string;
  date?: string;
}

export const NFTCard = ({
  date,
  description,
  mediaURL,
  name,
  collectionName,
  tokenId,
}: NFTCardProps) => {
  return (
    <div className="w-72 h-[440px]">
      <a
        href=""
        className="w-full p-2 bg-white border border-gray-400 rounded-2xl flex max-w-full min-h-0 min-w-0 shrink-0 flex-col items-stretch"
      >
        <div className="w-[269px] h-[269px] mb-3">
          <img
            src="/bored-ape.png"
            alt=""
            className="w-full h-full object-cover min-h-full rounded-2xl"
          />
        </div>
        <div className="grow h-[124px] my-rotate-180">
          <div className="flex justify-between items-start">
            <div className="py-0 px-2 max-w-[85%] flex flex-col">
              <span className="mb-[2px] text-xs font-medium text-gray-500">
                {collectionName}
              </span>
              <span className="grow whitespace-nowrap max-h-full text-base font-bold">
                {name} #{tokenId}
              </span>
            </div>
            <div className="bg-gray-200 flex items-center justify-center w-8 h-8 rounded-xl">
              <BsThreeDots />
            </div>
          </div>
          <div className="p-3 h-[68px] mt-3 rounded-xl bg-gray-100">
            <div className="flex max-w-full justify-between basis-auto">
              <div className="flex flex-col">
                <div className="mb-1 text-sm text-gray-400 font-medium max-w-full overflow-hidden whitespace-nowrap">
                  Detail
                </div>
                <div className="mb-1 text-sm font-medium max-w-full overflow-hidden">
                  {description}
                </div>
              </div>
              {date && (
                <div className="flex flex-col">
                  <div className="mb-1 text-sm text-gray-400 font-medium max-w-full overflow-hidden whitespace-nowrap">
                    Date of mint
                  </div>
                  <div className="mb-1 text-sm font-medium max-w-full overflow-hidden whitespace-nowrap">
                    {date}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
