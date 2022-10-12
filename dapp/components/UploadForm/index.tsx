import React from "react";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { prepareServerlessUrl } from "next/dist/server/base-server";

interface MetadataProps {
  name: string;
  description: string;
  image?: string;
  attributes?: string[];
}

interface UploadFormProps {
  setNFTMetadata: (val: MetadataProps) => void;
  nftMetadata: MetadataProps;
}

export const UploadForm = ({
  setNFTMetadata,
  nftMetadata,
}: UploadFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: MetadataProps) => setNFTMetadata(data);

  function handleNFTName(e: any) {
    setNFTMetadata({
      ...nftMetadata,
      name: e.target.value,
    });
  }

  function handleNFTDescription(e: any) {
    setNFTMetadata({
      ...nftMetadata,
      description: e.target.value,
    });
  }

  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
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
    //@ts-ignore
    <form className="space-y-3 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-3 flex flex-col">
        <label htmlFor="" className="mr-3 text-whi">
          Update File
        </label>
        <div
          {...getRootProps()}
          className="border border-dashed flex items-center justify-center py-10"
        >
          <input {...getInputProps()} />
          <p>Drag and drop or press to upload File</p>
        </div>
      </div>
      <div className="space-y-3 flex flex-col">
        <label htmlFor="" className="mr-3">
          Name
        </label>
        <input
          type="text"
          placeholder=""
          className="border border-gray-300 px-3 py-2 rounded-full text-sm"
          {...register("nftName")}
          onChange={handleNFTName}
        />
      </div>
      <div className="space-y-3 flex flex-col">
        <label htmlFor="" className="mr-3">
          Description
        </label>
        <textarea
          placeholder=""
          name="description"
          className="border border-gray-300 px-3 py-2 rounded-xl text-sm"
          rows={4}
          onChange={handleNFTDescription}
        />
      </div>
      <button
        type="submit"
        className="flex items-center space-x-3 bg-black text-white py-3 px-4 rounded-full max-w-max cursor-pointer hover:bg-gray-800 transition-all"
      >
        Mint NFT
        <span className="ml-3">
          <BsArrowRight />
        </span>
      </button>
    </form>
  );
};
