const SummaryTable = () => {
    const NotSubmitted = () => {
      return (
        <div className="text-center bg-red-300 text-red-800 w-1/2 rounded-full">
          Not submit
        </div>
      );
    };
    const Submitted = () => {
      return (
        <div className="text-center bg-green-300 text-green-800 w-1/2 rounded-full">
          Submitted
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
      <table className="text-left">
        <thead className="border-b-2 mb-2">
          <tr>
            <th className="w-2/12">Full Name</th>
            <th className="w-2/12">Email</th>
            <th className="w-1/12">Phone</th>
            <th className="w-1/12">Account Name</th>
            <th className="w-2/12 pl-5">Account Number</th>
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
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.accountName}</td>
                <td className="pl-5">{data.accountNumber}</td>
                <td>{data.submitDate}</td>
                <td>{data.totalSalary}</td>
                {data.status ? (
                  <td>
                    <Submitted />
                  </td>
                ) : (
                  <td>
                    <NotSubmitted />
                  </td>
                )}                <td>{data.transferBy}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  export default SummaryTable;
  