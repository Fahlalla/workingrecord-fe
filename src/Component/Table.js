import styled from "styled-components";

const ButtonNotSubmit = styled.div.attrs({
  className:
    "flex items-center rounded-full justify-center h-8 text-gray-100 bg-indigo-600 rounded-md w-24 text-red-600 my-2",
})`
  background-color: #ffc9c9;
`;
const ButtonSubmitted = styled.div.attrs({
  className:
    "flex items-center rounded-full justify-center h-8 text-gray-100 bg-indigo-600 rounded-md w-24 text-green-600 my-2",
})`
  background-color: #9ecf7d;
`;

const Table = () => {
  return (
    <div>
      <table className="text-left mb-4 overflow-y-auto">
        <thead>
          <tr>
            <th className="w-3/12">Name</th>
            <th className="w-3/12">Email</th>
            <th className="w-2/12">Phone Number</th>
            <th className="w-2/12">Contact</th>
            <th className="w-2/12">Site</th>
            <th className="w-2/12 pl-5">Status</th>
          </tr>
        </thead>
        <div className="mb-4"></div>
        <tbody>
          <tr>
            <td>Tadsika Khongkasawan</td>
            <td>Tadsika@odds.team</td>
            <td>0818888888</td>
            <td>Jill(0888888888)</td>
            <td>saksiam</td>
            <ButtonSubmitted>Submitted</ButtonSubmitted>
          </tr>
          <tr>
            <td>Tadsika Khongkasawan</td>
            <td>Tadsika@odds.team</td>
            <td>0818888888</td>
            <td>Jill(0888888888)</td>
            <td>saksiam</td>
            <ButtonSubmitted>Submitted</ButtonSubmitted>
          </tr>
          <tr>
            <td>Tadsika Khongkasawan</td>
            <td>Tadsika@odds.team</td>
            <td>0818888888</td>
            <td>Jill(0888888888)</td>
            <td>saksiam</td>
            <ButtonNotSubmit>Not Submit</ButtonNotSubmit>
          </tr>
          <tr>
            <td>Tadsika Khongkasawan</td>
            <td>Tadsika@odds.team</td>
            <td>0818888888</td>
            <td>pea(0888888888)</td>
            <td>odds</td>
            <ButtonNotSubmit>Not Submit</ButtonNotSubmit>
          </tr>
          <tr>
            <td>pui pui</td>
            <td>pui@odds.Team</td>
            <td>0818888888</td>
            <td>Jill(0888888888)</td>
            <td>pea</td>
            <ButtonNotSubmit>Not Submit</ButtonNotSubmit>
          </tr>
          <tr>
            <td>pui pui</td>
            <td>pui@odds.Team</td>
            <td>0818888888</td>
            <td>Jill(0888888888)</td>
            <td>pea</td>
            <ButtonNotSubmit>Not Submit</ButtonNotSubmit>
          </tr>
          <tr>
            <td>pui pui</td>
            <td>pui@odds.Team</td>
            <td>0818888888</td>
            <td>Jill(0888888888)</td>
            <td>pea</td>
            <ButtonNotSubmit>Not Submit</ButtonNotSubmit>
          </tr>
          <tr>
            <td>pui pui</td>
            <td>pui@odds.Team</td>
            <td>0818888888</td>
            <td>Jill(0888888888)</td>
            <td>odds</td>
            <ButtonNotSubmit>Not Submit</ButtonNotSubmit>
          </tr>
          <tr>
            <td>pui pui</td>
            <td>pui@odds.Team</td>
            <td>0818888888</td>
            <td>Jill(0888888888)</td>
            <td>odds</td>
            <ButtonNotSubmit>Not Submit</ButtonNotSubmit>
          </tr>
          <tr>
            <td>pui pui</td>
            <td>pui@odds.Team</td>
            <td>0818888888</td>
            <td>Jill(0888888888)</td>
            <td>odds</td>
            <ButtonNotSubmit>Not Submit</ButtonNotSubmit>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Table;
