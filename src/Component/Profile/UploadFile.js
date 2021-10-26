const UploadFile = ({ label }) => {
  return (
    <div className="flex-col ">
      <div>{label}</div>
      <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
        <div className="absolute">
          <div className="flex flex-col items-center ">
            <i className="fa fa-cloud-upload fa-3x text-gray-200"></i>
            <span className="block text-blue-400 font-normal">Upload files</span>
          </div>
        </div>
        <input type="file" className="h-full w-full opacity-0" name="" />
      </div>
    </div>
  );
};

export default UploadFile;
