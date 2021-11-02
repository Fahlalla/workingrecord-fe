import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import th from "date-fns/locale/th";
import DatePickerIcon from "../Asset/DatePicker.svg";

const DatePickers = () => {
  const [startDate, setStartDate] = useState(new Date());
  const iconCalendarStyle = {
    position: "absolute",
    padding: "1% 1% 0 8%",
    display: "flex",
  };

  return (
    <label className="flex rounded-md border-2 border-gray-300">
      <DatePicker
        className="py-3 w-full px-3 h-14"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MMMM yyyy"
        locale={th}
      />
      <span className="icon-calendar" style={iconCalendarStyle}>
        <img
          src={DatePickerIcon}
          alt="Datepicker Icon"
          className="cursor-pointer"
        />
      </span>
    </label>
  );
};

export default DatePickers;
