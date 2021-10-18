import image from "../Asset/Odds.png";
import image1 from "../Asset/Vector.png";
import image2 from "../Asset/Vector-4.png";
import image3 from "../Asset/Vector-5.png";
import image4 from "../Asset/alert.png";

const Menubar = () => {
  return (
    <div className="flex">
      <div className="h-screen text-center text-white bg-gray-900 ">
        <button className=" my-8">
          {" "}
          <img className="w-36 mt-20 " src={image} alt="odds" />{" "}
        </button>
        <div className=" px-20 text-center text-white">
          <button className="flex mr-2 my-8 hover:text-red-500">
            <img className=" mr-4  " src={image1} alt="Vector" />
            Individual
          </button>
        </div>

        <div className=" px-20 text-center text-white">
          <button className="flex mr-2  my-8 hover:text-red-500 ">
            <img className=" mr-4" src={image2} alt="Vector-4" />
            History
          </button>
        </div>

        <div className="px-20 text-center text-white">
          <button className="flex my-8 hover:text-red-500 ">
            <img className=" mr-4" src={image3} alt="Vector-5" />
            Profile
          </button>
        </div>

        <div className="px-20 text-center text-white">
          <button className="flex my-8 hover:text-red-500 ">
            <img className=" mr-4" src={image4} alt="alert" />
            Issue Problem
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
