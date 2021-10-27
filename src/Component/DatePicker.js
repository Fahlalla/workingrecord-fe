import React, { useState } from "react";
import DatePicker from "react-datepicker";

// import required css from library
import "react-datepicker/dist/react-datepicker.css";

// main implementation. using selected and onChange as main props to get and change the selected date value
const DatePickers = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    // <div className="border-gray-400">
    <DatePicker
      className=""
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="dd/MMMM/yyyy"
    />
    // </div>
  );
};

export default DatePickers;
