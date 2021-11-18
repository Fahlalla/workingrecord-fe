import Search from "../Component/search";
import DatePickers from "../Component/DatePicker";
import SummaryTable from "../Component/SummaryTable";
import Vector from "../Asset/Vector.png";
import NavigationBar from "../Component/NavigationBar";
import { IndividualInformations as tableData } from "../IndividualInformations";
import { CSVLink } from "react-csv"

const Summary = () => {

  const headers = [
    {lebel: "Name", key: "name"},
    {lebel: "E-mail", key: "email"},
    {lebel: "Phone", key: "phone"},
    {lebel: "Contact", key: "contact"},
    {lebel: "Site", key: "site"},
    {lebel: "Status", key: "status"},
    {lebel: "Account Number", key: "accountNumber"},
    {lebel: "Daily Income", key: "dailyIncome"},
    {lebel: "Total Salary", key: "totalSalary"},
    {lebel: "Man Day", key: "manDay"},
    {lebel: "Transfer By", key: "transferBy"},
    {lebel: "Transfer Name", key: "transferName"},
  ];

  const csvReport = {
    filename: "report.csv",
    headers: headers,
    data: tableData
  };
  return (
    <div className="flex h-full w-full overflow-scroll">
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
              <CSVLink {...csvReport} className="font-bold w-40 h-14 text-white bg-blue-400 rounded-full">
                Export
              </CSVLink>
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
