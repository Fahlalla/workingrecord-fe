import { IndividualInformations as tableData } from "../IndividualInformations";
import { AdminProfiles } from "../AdminProfiles";
const SummaryTable = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const tab = urlParams.get("tab") ? urlParams.get("tab") : "allList";

  const NotExport = () => {
    return (
      <div className="text-center bg-gray-200 text-gray-500 w-2/2 rounded-full">
        Not Export
      </div>
    );
  };
  const Exported = () => {
    return (
      <div className="text-center bg-blue-300 text-black-800 w-2/2 rounded-full">
        Exported
      </div>
    );
  };

  const Table = (data) => {
    return (
      <>
        <tr className="h-10">
          <td className="text-left">{data.name}</td>
          <td>{data.email}</td>
          <td>{data.phone}</td>
          <td>{data.accountName}</td>
          <td className="pl-5">{data.accountNumber}</td>
          <td>{data.submitDate}</td>
          <td>{data.totalSalary}</td>
          {data.status ? (
            <td>
              <Exported />
            </td>
          ) : (
            <td>
              <NotExport />
            </td>
          )}{" "}
          <td >{AdminProfiles.find(x => x.id === data.transferBy).name}</td>
        </tr>
      </>
    );
  };

  return (
    <table className="text-center w-full">
      <thead className="border-b-2 mb-2">
        <tr>
          <th className="w-2/12 text-left">Full Name</th>
          <th className="w-2/12">Email</th>
          <th className="w-1/12">Phone</th>
          <th className="w-1/12">Account Name</th>
          <th className="w-2/12 pl-5">Account No.</th>
          <th className="w-1/12">Submit date</th>
          <th className="w-1/12">Total salary</th>
          <th className="w-1/12">Status</th>
          <th className="w-2/12">Transfer By</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data) => {
          return (
            <>
              {tab === "allList" &&
                (data.status !== null ? Table(data) : <></>)}
              {tab === "exportList" &&
                (data.status === true ? Table(data) : <></>)}
              {tab === "nonexportList" &&
                (data.status === false ? Table(data) : <></>)}
            </>
          );
        })}
      </tbody>
    </table>
  );
};
export default SummaryTable;
