import CloudUpload from "../../Asset/cloud_upload.svg";
import { useState, useEffect } from "react";

const UploadFile = ({ label }) => {
  const [selectedFile, setSelectedFile] = useState(false);
  const [preview, setPreview] = useState("");

  const uploadFile = (file) => {
    setSelectedFile(true);
    console.log(file);
  };

  useEffect(() => {}, [selectedFile]);

  return (
    <div className="flex-col ">
      <div>{label}</div>
      <div
        className="relative h-32 shadow-md border border-gray-200 rounded-md w-80 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none bg-white flex justify-center items-center hover:cursor-pointer"
        // style={{ backgroundImage: `url(${preview})` }}
      >
        <div className="absolute">
          <div className="flex flex-col items-center ">
            <i className="fa fa-cloud-upload fa-3x text-gray-200"></i>
            <img src={CloudUpload} alt="cloud upload" />
            <span className="block text-skyblue font-normal">Upload files</span>
          </div>
        </div>
        <input
          type="file"
          className="h-full w-full opacity-0"
          onChange={(e) => {
            uploadFile(e.target.files[0]);
            const reader = new FileReader();
            reader.readAsBinaryString(e.target.files[0]);
            reader.onload = () => {
              const fileRes = btoa(reader.result);
              setPreview(`data:image/jpg;base64,${fileRes}`);
            };
          }}
        />
      </div>
      {selectedFile && (
        <div className="relative h-32 shadow-md border border-gray-200 rounded-md w-80 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none bg-white flex justify-center items-center">
          <img src={preview} alt="preview image" className="max-h-full max-w-full"/>
        </div>
      )}
    </div>
  );
};

export default UploadFile;
