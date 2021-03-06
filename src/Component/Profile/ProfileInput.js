const ProfileInput = ({ label, disabled, value, onChange, dataCy }) => {
  return (
    <div className="flex-col">
      <div>{label}</div>
      <input
        data-cy={dataCy}
        disabled={disabled}
        className={`py-2 pl-4 text-sm text-black shadow-md border border-gray-200 rounded-md w-80 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none ${
          disabled && "bg-gray-300"
          }`}
        type="text"
        value={value} onChange={onChange}
      />
    </div>
  );
};

export default ProfileInput;
