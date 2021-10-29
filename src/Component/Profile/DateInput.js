import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DateInput = ({label}) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <div>{label}</div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="py-2 pl-4 text-sm text-black shadow-md border border-gray-200 rounded-md w-80 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default DateInput;
