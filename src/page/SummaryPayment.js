import Card from "../Component/Card.js";
import WorklogSum from "../Component/WorklogSum.js";
import SummaryTable from "../Component/SummaryTable.js";

const SummaryPayment = () => {
  return (
    <div className="flex flex-col w-full pt-4 px-12 ">
      <div className="flex space-y-2">
        <WorklogSum />
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
