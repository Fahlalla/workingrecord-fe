import React, { useState } from "react";
import DatePicker from "react-datepicker";
import DateIcon from "../../Asset/date-icon.svg"
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
    
    const DateInput = ({label, dataCy}) => {
      const [startDate, setStartDate] = useState(null);
      return (
        <div>
          <div>{label}</div>
            <div className="relative" data-cy={dataCy}>
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="py-2 pl-4 text-sm text-black shadow-md border border-gray-200 rounded-md w-80 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none"
                customStyles={DateIcon}
            />
            <div className="absolute top-0 right-0 px-3 py-2">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.25 15H15V21.25H21.25V15ZM20 1.25V3.75H10V1.25H7.5V3.75H6.25C4.8625 3.75 3.7625 4.875 3.7625 6.25L3.75 23.75C3.75 25.125 4.8625 26.25 6.25 26.25H23.75C25.125 26.25 26.25 25.125 26.25 23.75V6.25C26.25 4.875 25.125 3.75 23.75 3.75H22.5V1.25H20ZM23.75 23.75H6.25V10H23.75V23.75Z" fill="#1E1E1E"/>
                </svg>
            </div>
            </div>
        </div>
      );
    };
    
    export default DateInput;
    
