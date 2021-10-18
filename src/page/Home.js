import Menubar from "../Component/Menubar";
import Profile from "../Component/Profile";
import Button from "../Component/button";
import Search from "../Component/search";
import Table from "../Component/Table";
import "../index.css";

const Home = () => {
  return (
    <div className="flex">
      <aside className="h-screen sticky top-0 bg-side-color">
        <Menubar />
      </aside>
      <main className="flex-1 flex-col bg-purple-600">
        <div className="mx-6">
          <div className="bg-red-200 w-full h-screen"></div>
          <div className="bg-blue-200 w-full h-screen"></div>
          <div className="bg-green-200 w-full h-screen"></div>
        </div>
      </main>
    </div>
  );
};
export default Home;
