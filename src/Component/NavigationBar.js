// import React from "react";

const NavigationBar = () => {
  return (
    <div className="flex flex-col justify-end">
      <div>
        <ul className="flex cursor-pointe">
          <button className="py-2 px-6 rounded-t-lg text-gray-500 bg-gray-200 focus:bg-blue-400 focus:text-white ">
            รายการทั้งหมด
          </button>
          <button className="py-2 px-6 rounded-t-lg text-gray-500 bg-gray-200 focus:bg-blue-400 focus:text-white">
            คนที่กรอกแล้ว
          </button>
          <button className="py-2 px-6 rounded-t-lg text-gray-500 bg-gray-200 focus:bg-blue-400 focus:text-white">
            คนที่ยังไม่ได้กรอก
          </button>
        </ul>
      </div>
    </div>
  );
};
export default NavigationBar;
