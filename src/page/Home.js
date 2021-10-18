import Sidebar from "../Component/Sidebar";
// import Menubar from "../Component/Menubar"
import Profile from "../Component/Profile";
import Button from "../Component/button";
import Search from "../Component/search";
import Table from "../Component/Table";

const Home = () => {
  return (
    <section className="grid grid-cols-6 gap-2">
      <div className="col-span-2 lg:col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-4 lg:col-span-5">
        <div className="flex justify-between h-auto p-6 m-4 border-2 border-gray-300 rounded-md">
          <Profile />
          <Button />
        </div>
        <div className="mb-4 mr-4">
          <Search />
        </div>
        <div className="p-8 m-4 border-2 border-gray-300 rounded-md">
          <Table />
        </div>
      </div>
    </section>
  );
};
export default Home;
