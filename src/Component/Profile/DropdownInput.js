const DropdownInput = ({ label, options }) => {
  let optionList =
    options.length > 0 &&
    options.map((item, i) => {
      return <option key= {item.value}>{item.value}</option>;
    });

  return (
    <div className="flex-col">
      <div>{label}</div>
      <select
        className={`py-2 pl-10 text-sm text-black shadow-md border border-gray-200 rounded-md w-80 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none`}
      >
        {optionList}
      </select>
    </div>
  );
};

export default DropdownInput;
