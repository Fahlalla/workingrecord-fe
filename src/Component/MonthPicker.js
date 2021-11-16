import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerIcon from "../Asset/DatePicker.svg";
import th from "date-fns/locale/th";

const iconCalendarStyle = {
  position: "absolute",
  padding: "1rem 0 0 10rem",
  display: "flex"
};

const MonthPicker = (props) => {
  return (
    <label className="flex rounded-md border-2 border-gray-300" data-cy="selectedmonth" >
      <DatePicker
        selected={props.month}
        locale={th}
        dateFormat="MMMM yyyy"
        showMonthYearPicker
        onChange={(month) => {
          props.setSelectMonth(month);
        }}
      />
      <img
          src={DatePickerIcon}
          alt="Datepicker Icon"
          className="cursor-pointer"
        />
      <span className="icon-calendar" style={iconCalendarStyle}>
    
      </span>
    </label>
  );
};
export default MonthPicker;
