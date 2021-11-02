const SummaryTable = () => {
  const NotExport = () => {
    return (
      <div className="text-center bg-red-300 text-red-800 w-2/2 rounded-full">
        Not Export
      </div>
    );
  };
  const Exported = () => {
    return (
      <div className="text-center bg-green-300 text-green-800 w-2/2 rounded-full">
        Exported
      </div>
    );
  };

  const tableData = [
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      accountName: "Jill(0888888888)",
      accountNumber: "1234567890",
      submitDate: "12/12/2021",
      totalSalary: "300",
      status: false,
      transferBy: "PP",
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      accountName: "Jill(0888888888)",
      accountNumber: "1234567890",
      submitDate: "12/12/2021",
      totalSalary: "300",
      status: false,
      transferBy: "PP",
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      accountName: "Jill(0888888888)",
      accountNumber: "1234567890",
      submitDate: "12/12/2021",
      totalSalary: "300",
      status: false,
      transferBy: "PP",
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      accountName: "Jill(0888888888)",
      accountNumber: "1234567890",
      submitDate: "12/12/2021",
      totalSalary: "300",
      status: false,
      transferBy: "PP",
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      accountName: "Jill(0888888888)",
      accountNumber: "1234567890",
      submitDate: "12/12/2021",
      totalSalary: "300",
      status: false,
      transferBy: "PP",
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      accountName: "Jill(0888888888)",
      accountNumber: "1234567890",
      submitDate: "12/12/2021",
      totalSalary: "300",
      status: false,
      transferBy: "PP",
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      accountName: "Jill(0888888888)",
      accountNumber: "1234567890",
      submitDate: "12/12/2021",
      totalSalary: "300",
      status: false,
      transferBy: "PP",
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      accountName: "Jill(0888888888)",
      accountNumber: "1234567890",
      submitDate: "12/12/2021",
      totalSalary: "300",
      status: false,
      transferBy: "PP",
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      accountName: "Jill(0888888888)",
      accountNumber: "1234567890",
      submitDate: "12/12/2021",
      totalSalary: "300",
      status: true,
      transferBy: "PP",
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      accountName: "Jill(0888888888)",
      accountNumber: "1234567890",
      submitDate: "12/12/2021",
      totalSalary: "300",
      status: true,
      transferBy: "PP",
    },
  ];
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
              <td>{data.transferBy}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default SummaryTable;
