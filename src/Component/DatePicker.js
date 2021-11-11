import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import th from "date-fns/locale/th";
import DatePickerIcon from "../Asset/DatePicker.svg";

const DatePickers = () => {
  const [startDate, setStartDate] = useState(new Date());
  const iconCalendarStyle = {
    position: "absolute",
    padding: "1rem 0 0 10rem",
    display: "flex",
  };

  return (
    <label className="flex rounded-md border-2 border-gray-300 relative">
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
