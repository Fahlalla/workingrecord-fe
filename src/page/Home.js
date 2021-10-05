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
        <div className="grid grid-flow-col grid-rows-2 grid-cols-2 gap-4">
          <div className="flex">
            <img src={Profile} alt="Profile" width="100" height="100" />
            <div>ชื่อ ...</div>
          </div>
          <div>
            <div>รายได้สุทธิของคุณ 0.00 บาท</div>
            <div>บันทึก : อยากได้เงินก็กรอกมาสิ</div>
          </div>
          <div className="flex flex-col space-y-3">
            <button className="flex items-center justify-center rounded-md bg-black text-white w-32 h-8">
              Add income
            </button>
            <button className="flex items-center justify-center rounded-md border border-gray-300 w-32 h-8">
              Issue Problem
            </button>
          </div>
        </div>
        <div className="my-2">Search</div>
        <div className="box-content h-10 w-10 p-4 border-4">Tabel</div>
      </div>
    </div>
  );
};
export default Home;
