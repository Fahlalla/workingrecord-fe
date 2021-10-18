const Table = () => {
  let MockData = [
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      contact: "Jill(0888888888)",
      site: "PEA",
      status: "Not Submitted",
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      contact: "Jill(0888888888)",
      site: "PEA",
      status: "Submitted",
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      contact: "Jill(0888888888)",
      site: "PEA",
      status: "Submitted",
    },
    {
      name: "Tadsika Khongkasawan",
      email: "Tadsika@odds.team",
      phone: "0818888888",
      contact: "Jill(0888888888)",
      site: "PEA",
      status: "Submitted",
    },
  ];
  return (
    <table className="w-full text-left">
      <thead className="border-b-2">
        <tr>
          <th className="w-2/12 text-xl">
            <div className="mb-4">Name</div>
          </th>
          <th className="w-2/12 text-xl">
            <div className="mb-4">Email</div>
          </th>
          <th className="w-2/12 text-xl">
            <div className="mb-4">Phone Number</div>
          </th>
          <th className="w-2/12 text-xl">
            <div className="mb-4">Contact</div>
          </th>
          <th className="w-2/12 text-xl">
            <div className="mb-4">Site</div>
          </th>
          <th className="w-2/12 text-xl">
            <div className="mb-4">Status</div>
          </th>
        </tr>
      </thead>
      <tbody>
        {MockData.map((data, index) => {
          return (
            <tr key={`${index}-${data.name}`}>
              <td>
                <div className="mt-5">{data.name}</div>
              </td>
              <td>
                <div className="mt-5">{data.email}</div>
              </td>
              <td>
                <div className="mt-5">{data.phone}</div>
              </td>
              <td>
                <div className="mt-5">{data.contact}</div>
              </td>
              <td>
                <div className="mt-5">{data.site}</div>
              </td>
              <td>
                {data.status === "Submitted" ? (
                  <div className="mt-5 w-1/2 text-green-600 bg-green-200 rounded-lg text-center">
                    Submitted
                  </div>
                ) : (
                  <div className="mt-5 w-1/2 text-red-600 bg-red-200 rounded-lg text-center">
                    Not Submit
                  </div>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
