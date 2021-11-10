
const SummaryPaymentTable = (props) => {
  const tableDatas = props.data
  return (
    <table className="text-center ">
      <thead className="mb-2 border-b-2 ">
        <tr>
          <th className="w-1/24">No.</th>
          <th className="w-2/12">Full Name</th>
          <th className="w-2/12">Account No.</th>
          <th className="w-2/12">Daily Income</th>
          <th className="w-2/12">Total Salary</th>
          <th className="w-2/12">Manday</th>
          <th className="w-2/12">Upload</th>
          <th className="w-2/12">Status</th>
        </tr>
      </thead>
      <tbody>
        {tableDatas.map((data, index) => {
          return (
            <tr className="h-10" key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.accountNumber}</td>
              <td>{data.dailyIncome}</td>
              <td>{data.totalSalary}</td>
              <td>{data.manDay}</td>
              <td>{data.Upload}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SummaryPaymentTable;
