const DropdownInput = ({ label, option }) => {
  return (
    <div className="flex-col">
      <div>{label}</div>
      <select
        className={`py-2 pl-10 text-sm text-black shadow-md border border-gray-200 rounded-md w-80 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none`}
      >
        <option value="">1</option>
        <option value="">1</option>
        <option value="">1</option>
      </select>
    </div>
  );
};

export default DropdownInput;
