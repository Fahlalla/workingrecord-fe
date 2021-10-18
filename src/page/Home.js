import Menubar from "../Component/Menubar";
import Profile from "../Component/Profile";
import Button from "../Component/button";
import Search from "../Component/search";
import Table from "../Component/Table";
const Home = () => {
  return (
    <div className="flex h-full">
      <div class="flex flex-wrap items-start content-start border-r border-grey-lighter h-full">
        <Menubar />
      </div>
      <div className="flex flex-col w-full list-reset select-none pt-4">
        <div className="flex justify-between pr-16">
          <Profile />
          <Button />
        </div>
        <div className="pl-12 pt-8">
          <Search />
        </div>
        <div className="pl-12 pr-16 my-8">
          <Table />
        </div>
      </div>
    </div>
  );
};
export default Home;
