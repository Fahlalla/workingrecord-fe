import Menubar from "../Component/Menubar";
import Profile from "../Component/Profile";
import Button from "../Component/button";
import Search from "../Component/search";
import Table from "../Component/Table";

const Home = () => {
  return (
    <div className="flex min-h-screen ">
      <div className="w-56">
        <Menubar />
      </div>
      <div className="flex flex-col m-8 w-full">
        <div className="flex">
          <Profile />
          <Button />
        </div>
        <div className="flex justify-start">
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
    //     <div className="flex justify-between h-auto p-6 m-4 rounded-md">
    //       <Profile />
    //       <Button />
    //     </div>
    //     <div className="flex justify-start mb-4 mr-4">
    //       <Search />
    //     </div>
    //     <div className="p-8 m-4">
    //       <Table />
    //     </div>
    //   </div>
    // </section>
  );
};
export default Home;
