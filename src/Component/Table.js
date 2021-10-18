const Table = () => {
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
      contact: "Jill(0888888888)",
      site: "PEA",
      status: false,
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      contact: "Jill(0888888888)",
      site: "PEA",
      status: false,
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      contact: "Jill(0888888888)",
      site: "PEA",
      status: false,
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      contact: "Jill(0888888888)",
      site: "PEA",
      status: false,
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      contact: "Jill(0888888888)",
      site: "PEA",
      status: false,
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      contact: "Jill(0888888888)",
      site: "PEA",
      status: false,
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      contact: "Jill(0888888888)",
      site: "PEA",
      status: false,
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      contact: "Jill(0888888888)",
      site: "PEA",
      status: false,
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      contact: "Jill(0888888888)",
      site: "PEA",
      status: false,
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      contact: "Jill(0888888888)",
      site: "PEA",
      status: true,
    },
  ];
  return (
    <table className="space-y-4 text-center divide-y divide-gray-300">
      <thead>
        <tr>
          <th className="w-2/12">Name</th>
          <th className="w-2/12">Email</th>
          <th className="w-2/12">Phone Number</th>
          <th className="w-2/12">Contact</th>
          <th className="w-2/12">Site</th>
          <th className="w-2/12">Status</th>
        </tr>
      </thead>
      <div className="divide-y "></div>
      <tbody>
        {tableData.map((data) => {
          return (
            <tr className="h-10">
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.contact}</td>
              <td>{data.site}</td>
              {data.status ? (
                <td className="flex justify-center">
                  <Submitted />
                </td>
              ) : (
                <td className="flex justify-center">
                  <NotSubmitted />
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
