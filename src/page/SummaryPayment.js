import Card from "../Component/Card.js";
import WorklogSum from "../Component/WorklogSum.js";
import SummaryTable from "../Component/SummaryTable.js";
import Datepicker from "../Component/DatePicker.js";


const SummaryPayment = () => {
  return (
    <div className="flex flex-col w-full px-12 pt-4 ">
      <div className="flex justify-between space-y-2">
        <WorklogSum />
        <div>
          <Datepicker />
        </div>
      </div>
      <div className="flex justify-between mt-8">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="mt-8">
        <SummaryTable />
      </div>
    </div>
  );
};
export default SummaryPayment;
