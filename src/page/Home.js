import Menubar from "../Component/Menubar";
import Profile from "../Component/Profile";
import Button from "../Component/button";
import Search from "../Component/search";
import Table from "../Component/Table";

const Home = () => {
  return (
    <div className="flex h-full w-full">
      <div className="flex items-start content-start h-full">
        <Menubar />
      </div>
      <div className="flex flex-col w-full pt-4 px-12">
        <div className="flex justify-between ">
          <Profile />
          <Button />
        </div>
        <div className="mt-8">
          <Search />
        </div>
        <div className="mt-8">
          <Table />
        </div>
      </div>
    </div>
  );
};
export default Home;
