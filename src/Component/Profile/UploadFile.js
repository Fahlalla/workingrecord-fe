const UploadFile = ({ label, disabled, isMultiple }) => {
  return (
    <div className="flex-col">
      <div>{label}</div>
      <input
        disabled={disabled}
        multiple={isMultiple}
        className={`py-2 pl-10 text-sm text-black shadow-md border border-gray-200 rounded-md w-80 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none ${disabled && "bg-gray-300"
          }`}
        type="file"
      />
    </div>
  );
};

export default UploadFile;
