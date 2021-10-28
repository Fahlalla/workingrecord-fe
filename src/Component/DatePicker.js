import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import th from "date-fns/locale/th";

const DatePickers = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    // <div className="border-gray-400">
    <DatePicker
      className="py-3 px-3"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MMMM yyyy"
      locale={th}
    />
    // </div>
  );
};

export default DatePickers;
