import { useState } from "react";
import Card from "../Component/Card.js";
import WorklogSum from "../Component/WorklogSum.js";
import SummaryTable from "../Component/SummaryTable.js";
import MonthPicker from "../Component/MonthPicker.js";


const SummaryPayment = () => {
  const [selectMonth, setSelectMonth] = useState(new Date());
  return (
    <div className="flex flex-col w-full px-12 pt-4 ">
      <div className="flex justify-between space-y-2">
        <WorklogSum month={selectMonth} />
        <div>
          <MonthPicker month={selectMonth} setSelectMonth={setSelectMonth}/>
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="mt-8">
        <SummaryTable />
        <div className="flex justify-center font-bold text-lg">รวมยอดเงิน 3,000,000 บาท </div>
        <div></div>
        <div>
         <div className="flex flex-wrap content-center justify-center">
             <button className="font-bold w-80 h-14 text-white rounded-full text-lg " style = {{backgroundColor:'#00B6EF'}}>
                ยืนยันการโอนครบถ้วน และส่งให้บัญชี
              </button>
          </div>
      </div>
      </div>
    </div>
  );
};
export default SummaryPayment;
