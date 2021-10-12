import Menubar from "../Component/Menubar"
import Profile from "../Component/Profile"
import Button from "../Component/button";
import Search from "../Component/search";

const Home = () => {
  return (
    <div>
      <Menubar />
      <Profile />
      <Button />
      <Search />
    </div>

    // <div className="flex">
    //   <div className="w-1/6 text-white text-center bg-blue-300">
    //     <div className="my-8"> Individual</div>
    //     <div className="my-8">History</div>
    //     <div className="my-8">Profile</div>
    //   </div>
    //   <div className="w-5/6 bg-white-50 ">
    //     <div className="grid grid-flow-col gap-4">
    //       <div className="flex">
    //         <img src={Profile} alt="Profile" width="200" height="200" />
    //         <div>
    //           <div>ชื่อ ...</div>
    //           <div>รายได้สุทธิของคุณ 0.00 บาท</div>
    //           <div>บันทึก : อยากได้เงินก็กรอกมาสิ</div>
    //         </div>
    //       </div>

    //       <div className="flex flex-wrap justify-end content-center">
    //         <div className="flex flex-col">
    //           <div>
    //             <button className="w-56 h-12 text-white bg-black rounded-md">
    //               Add income
    //             </button>
    //           </div>
    //           <div>
    //             <button className="w-56 h-12 border border-gray-300 rounded-md">
    //               Issue Problem
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div></div>
    //     <form class="relative ml-6 list-disc">
    //       <div className="flex justify-end">
    //         <div className="relative">
    //           <svg
    //             width="20"
    //             height="20"
    //             fill="currentColor"
    //             className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               clip-rule="evenodd"
    //               d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
    //             />
    //           </svg>
    //           <input
    //             className=" w-80 focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
    //             type="text"
    //             aria-label="Search"
    //             placeholder="อยากค้นหาอะไรพิมพ์มาเลย"
    //           />{" "}
    //         </div>
    //         <button className="flex items-center justify-center w-36 h-10 text-indigo-600 border border-indigo-300 rounded-md">
    //           Search
    //         </button>
    //       </div>
    //     </form>

    //     <table>
    //       <thead>
    //         <tr>
    //           <th className="w-1/4 border-2 border-purple-400">Name</th>
    //           <th className="w-1/4 border-2 border-blue-500">Email</th>
    //           <th className="w-1/4 border-2 border-green-300">Phone Number</th>
    //           <th className="w-1/4 border-2 border-yellow-300">Contact</th>
    //           <th className="w-1/8 border-2 border-red-300">Site</th>
    //           <th className="w-1/8 border-2 border-red-500">Status</th>
    //           <th className="w-1/8 border-2 border-pink-300">Bell</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td className="border-2 border-purple-400">
    //             Tadsika Khongkasawan
    //           </td>
    //           <td claasName="border-2 border-blue-500">Tadsika@odds.team</td>
    //           <td className="border-2 border-green-300">0818888888</td>
    //           <td className="border-2 border-yellow-300">Jill(0888888888)</td>
    //           <td className="border-2 border-red-300">odds</td>
    //           <td className="border-2 border-red-500 text-green-600">
    //             Submitted
    //           </td>
    //         </tr>
    //         <tr>
    //           <td className="border-2 border-purple-400">
    //             Tadsika Khongkasawan
    //           </td>
    //           <td claasName="border-2 border-blue-500">Tadsika@odds.team</td>
    //           <td className="border-2 border-green-300">0818888888</td>
    //           <td className="border-2 border-yellow-300">Jill(0888888888)</td>
    //           <td className="border-2 border-red-300">odds</td>
    //           <td className="border-2 border-red-500 text-green-600">
    //             Submitted
    //           </td>
    //         </tr>
    //         <tr>
    //           <td className="border-2 border-purple-400">
    //             Tadsika Khongkasawan
    //           </td>
    //           <td claasName="border-2 border-blue-500">Tadsika@odds.team</td>
    //           <td className="border-2 border-green-300">0818888888</td>
    //           <td className="border-2 border-yellow-300">Jill(0888888888)</td>
    //           <td className="border-2 border-red-300">odds</td>
    //           <td className="text-red-600 border-2 border-red-500 ">
    //             Not Submit
    //           </td>
    //         </tr>
    //         <tr>
    //           <td className="border-2 border-purple-400">
    //             Tadsika Khongkasawan
    //           </td>
    //           <td claasName="border-2 border-blue-500">Tadsika@odds.team</td>
    //           <td className="border-2 border-green-300">0818888888</td>
    //           <td className="border-2 border-yellow-300">Jill(0888888888)</td>
    //           <td className="border-2 border-red-300">odds</td>
    //           <td className="text-red-600 border-2 border-red-500 ">
    //             Not Submit
    //           </td>
    //         </tr>
    //         <tr>
    //           <td className="border-2 border-pink-900">pui pui</td>
    //           <td className="border-2 border-pink-900">pui@odds.Team</td>
    //           <td className="border-2 border-pink-900">0818888888</td>
    //           <td className="border-2 border-pink-900">Jill(0888888888)</td>
    //           <td className="border-2 border-pink-900">odds</td>
    //           <td className="text-red-600 border-2 border-pink-900 ">
    //             Not Submit
    //           </td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
  );
};
export default Home;
