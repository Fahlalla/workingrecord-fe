import { lowerCase } from "lodash";

const DropdownInput = ({ label, options, disabled, dataCy }) => {
  let optionList =
    options.length > 0 &&
    options.map((item, i) => {
      const dataCy = item.value
      return <option key={item.value} data-cy={dataCy.toLowerCase()}>{item.value}</option>;
    });

  return (
    <div className="flex-col">
      <div>{label}</div>
      <select
        disabled = {disabled}
        data-cy = {dataCy}
        className={`py-2 pl-4 text-sm text-black shadow-md border border-gray-200 rounded-md w-80 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none`}
      >
        {optionList}
      </select>
    </div>
  );
};

export default DropdownInput;
