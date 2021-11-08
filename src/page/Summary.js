import Search from "../Component/search";
import DatePickers from "../Component/DatePicker";
import SummaryTable from "../Component/SummaryTable";
import Vector from "../Asset/Vector.png";
import NavigationBar from "../Component/NavigationBar";

const Summary = () => {
  return (
    <div className="flex h-full w-full">
      <div className="w-full pt-4 px-12">
        <div className="text-3xl mb-14 font-bold flex">
          Summary
          <div className="ml-2.5">
            <img src={Vector} alt="vector" className="h-8 w-8" />
          </div>
        </div>

        <div className="flex justify-between">
          <NavigationBar />
          <div className="flex justify-end mb-4">
            <div>
              <p className="text-lg font-bold"> Date: </p>
              <div className="flex flex-col justify-center items-center">
                <DatePickers />
              </div>
            </div>
            <div className="flex flex-col justify-end ml-6">
              <button className="font-bold w-40 h-14 text-white bg-blue-400 rounded-full">
                Export
              </button>
            </div>
          </div>
        </div>
        <div className="border-b-2 border-blue-400"></div>

        <div className="flex flex-col w-full pt-4 px-6">
          <div className="mt-8">
            <Search />
          </div>
          <div className="mt-8 overflow-scroll">
            <SummaryTable />
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="flex justify-between w-80 h-12 bg-white  text-gray-800 font-bold rounded border-2 py-2 px-6 inline-flex items-center my-4">
            <div className="">ยอดรวมทั้งหมด</div>
            <div>XXXXXXXX</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
