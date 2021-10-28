import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import th from "date-fns/locale/th";
import DatePickerIcon from "../Asset/DatePicker.svg";

const DatePickers = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <label className="flex">
      <DatePicker
        className="py-3 w-32 text-center"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MMMM yyyy"
        locale={th}
      />
      <img
        src={DatePickerIcon}
        alt="Datepicker Icon"
        className="cursor-pointer"
      />
    </label>
  );
};

export default DatePickers;
