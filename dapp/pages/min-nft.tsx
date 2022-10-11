import type { NextPage } from "next";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { BsUpload, BsTwitter } from "react-icons/bs";

const MintNFTPage: NextPage = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="h-screen w-screen bg-gray-300 flex items-center px-9">
      <div className="w-full max-w-4xl mx-auto bg-white p-4 rounded-lg shadow-sm">
        {/* Title */}
        <div className="mb-4">
          <h1 className="text-2xl mb-1">NFT Minter</h1>
          <p className="text-sm text-gray-400">Create your NFT with us!</p>
        </div>
        <form className="flex flex-col space-y-3">
          {/* Upload Asset */}
          <div
            className="flex items-center justify-center h-40 border  border-gray-300 rounded-lg"
            {...getRootProps()}
          >
            <input
              type="file"
              name="name"
              placeholder="Name"
              {...getInputProps()}
            />
            <div className="flex flex-col items-center justify-center space-y-2">
              <BsUpload size={32} className="text-gray-400" />
              <p className="text-sm text-gray-400">
                Click to upload or drag and drop
              </p>
            </div>
          </div>
          <input
            type="text"
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="Name"
          />
          <textarea
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="Description"
          />
          {/* <div className="flex relative ">
            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
              <BsTwitter />
            </span>
            <input
              type="text"
              id="email-with-icon"
              className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="email"
              placeholder="Your Twitter"
            />
          </div> */}
          <hr />
          <button type="submit">Mint NFT</button>
        </form>
      </div>
    </div>
  );
};

export default MintNFTPage;
