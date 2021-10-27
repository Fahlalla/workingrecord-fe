import { IndividualInformation as TableData } from "../IndividualInformation";

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

  return (
    <table className="text-left">
      <thead className="border-b-2 mb-2">
        <tr>
          <th className="w-2/12">Name</th>
          <th className="w-2/12">Email</th>
          <th className="w-2/12">Phone Number</th>
          <th className="w-2/12">Contact</th>
          <th className="w-2/12">Site</th>
          <th className="w-2/12">Status</th>
          <th className="w-2/12">Bell</th>
        </tr>
      </thead>
      <tbody>
        {TableData.map((data, index) => {
          return (
            <tr className="h-10" key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.contact}</td>
              <td>{data.site}</td>
              {data.status ? (
                <td>
                  <Submitted key={index}/>
                </td>
              ) : (
                <td>
                  <NotSubmitted key={index}/>
                </td>
              )}

              <td>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#444444"
                  key={index}
                >
                  <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                </svg>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
