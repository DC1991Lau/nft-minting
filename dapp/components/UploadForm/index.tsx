import React from "react";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";

interface MetadataProps {
  name: string;
  description: string;
  image: string;
  attributes?: string[];
}

export const UploadForm = () => {
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
    <form>
      <div
        className="flex items-center justify-center h-40 mb-2 rounded-lg border-transparent flex-1 appearance-none border text-center border-dashed border-gray-300 w-full py-2 px-4 bg-white  shadow-sm text-base focus:outline-none focus:ring-2  focus:border-transparent"
        {...getRootProps()}
      >
        <input
          type="file"
          name="name"
          placeholder="Name"
          {...getInputProps()}
        />
        <p className="text-base  text-gray-400">Upload File</p>
      </div>
      <div className="mb-2 text-sm">
        <input
          type="text"
          className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          name="name"
          placeholder="Name"
        />
      </div>
      <div>
        <textarea
          className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent shadow-sm"
          id="comment"
          placeholder="Description"
          name="comment"
          rows={5}
          cols={30}
        ></textarea>
      </div>
    </form>
  );
};
