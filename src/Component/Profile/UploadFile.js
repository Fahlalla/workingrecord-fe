import CloudUpload from "../../Asset/cloud_upload.svg"
import { useState } from "react";

const UploadFile = ({ label }) => {
const [selectedFile ,setSelectedFile] = useState(null);

const uploadFile = (file) => {
  setSelectedFile(file)
  console.log(file);
}
  return (
    <div className="flex-col ">
      <div>{label}</div>
      <div className="relative h-32 shadow-md border border-gray-200 rounded-md w-80 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none bg-white flex justify-center items-center hover:cursor-pointer">
        <div className="absolute">
          <div className="flex flex-col items-center ">
            <i className="fa fa-cloud-upload fa-3x text-gray-200"></i>
            <img src={CloudUpload} alt='cloud upload'/>
            <span className="block text-skyblue font-normal">Upload files</span>
          </div>
        </div>
        <input type="file" className="h-full w-full opacity-0" name="" 
        onChange={(e)=> uploadFile(e.target.files[0])}/>
      </div>
    </div>
  );
};

export default UploadFile;
