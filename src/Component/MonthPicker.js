import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MonthPicker = (props) => {
  return (
    <div>
      <DatePicker
        selected={props.month}
        dateFormat="MMMM yyyy"
        showMonthYearPicker
        onChange={month => {
          props.setSelectMonth(month);
        }}
      />
    </div>
  );
};
export default MonthPicker;
