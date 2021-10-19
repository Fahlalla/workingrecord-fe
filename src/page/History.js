import Button from "../Component/Button";
import Menubar from "../Component/Menubar";
import Profile from "../Component/Profile";
import Search from "../Component/search";

const HistoryPage = () => {
  return (
    <section className="grid grid-cols-6 gap-2">
      <div className="col-span-1 col-start-1 w-max">
        <Menubar />
      </div>
      <div className="col-start-2 col-end-7">
        <div className="flex justify-between h-auto p-6 m-4 border-2 border-gray-300 rounded-md">
          <Profile />
          <Button />
        </div>
        <div className="mb-4 mr-4">
          <Search />
        </div>
        <div className="p-8 m-4 border-2 border-gray-300 rounded-md">
          History
        </div>
      </div>
    </section>
  );
};
export default HistoryPage;
