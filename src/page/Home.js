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
    // <section className="grid grid-cols-6 gap-2">
    //   <div className="col-span-1 col-start-1 w-max">
    //     <Menubar />
    //   </div>
    //   <div className="col-start-2 col-end-7">
    //
    //     <div className="mb-4 mr-4">
    //       <Search />
    //     </div>
    //     <div className="p-8 m-4 border-2 border-gray-300 rounded-md">
    //       <Table />
    //     </div>
    //   </div>
    // </section>
  );
};
export default Home;
