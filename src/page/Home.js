import Profile from "../Asset/Profile.png";

const Home = () => {
  return (
    <div className="flex">
      <div className="w-1/4 text-center bg-green-100">
        <div className="my-8"> Individual</div>
        <div className="my-8">History</div>
        <div className="my-8">Profile</div>
      </div>
      <div className="w-3/4 bg-green-50">
        <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4">
          <div className="flex">
            <img src={Profile} alt="Profile" width="100" height="100" />
            <div>ชื่อ ...</div>
          </div>
          <div>
            <div>รายได้สุทธิของคุณ 0.00 บาท</div>
            <div>บันทึก : อยากได้เงินก็กรอกมาสิ</div>
          </div>
          <div className="flex flex-col space-y-3">
            <button className="flex items-center justify-center w-32 h-8 text-white bg-black rounded-md">
              Add income
            </button>
            <button className="flex items-center justify-center w-32 h-8 border border-gray-300 rounded-md">
              Issue Problem
            </button>
          </div>
        </div>



        <form class="relative ml-6 list-disc">
          <div>อยากค้นหาอะไรพิมพ์มาเลย ... </div>
          <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
          </svg>
          <input class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10" type="text" aria-label="Search" placeholder="Search" />
        </form>

        <table class="table-auto border-separate">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Contact</th>
              <th>Site</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tadsika Khongkasawan</td>
              <td>Tadsika@odds.Team</td>
              <td>0818888888</td>
              <td>Jill(0888888888)</td>
              <td>odds</td>
              <td>Submitted</td>
            </tr>
            <tr>
              <td>Tadsika Khongkasawan</td>
              <td>Tadsika@odds.Team</td>
              <td>0818888888</td>
              <td>Jill(0888888888)</td>
              <td>odds</td>
              <td>Submitted</td>
            </tr>
            <tr>
              <td>Tadsika Khongkasawan</td>
              <td>Tadsika@odds.Team</td>
              <td>0818888888</td>
              <td>Jill(0888888888)</td>
              <td>odds</td>
              <td class=" text-red-600">Not Submit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;
