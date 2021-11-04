import { Link } from "react-router-dom";
import { useState } from "react";

const NavigationBar = () => {
  const [pathIndex, setPathIndex] = useState();
  const nameHeader = [{name:"รายการทั้งหมด"}, {name:"คนที่กรอกแล้ว"}, {name:"คนที่ยังไม่ได้กรอก"}] 
  const list = (
    <button className="py-2 px-6 rounded-t-lg text-gray-500 bg-gray-200 focus:bg-blue-400 focus:text-white ">
      {nameHeader[0].name}
    </button>
  );
  const presonMakeList = (
    <button className="py-2 px-6 rounded-t-lg text-gray-500 bg-gray-200 focus:bg-blue-400 focus:text-white" >
      {nameHeader[1].name}
     
    </button>
  );
  const noPresonMakeList = (
    <button className="py-2 px-6 rounded-t-lg text-gray-500 bg-gray-200 focus:bg-blue-400 focus:text-white">
      {nameHeader[2].name}
    </button>
  );

  const listItem = [
    {
      
      path: "#",
      logo: list,
    },
    {
     
      path: "?tap=exportList",
      logo: presonMakeList,
    },
    {
     
      path: "#",
      logo: noPresonMakeList,
    },
  ];

  const handleActive = (index) => {
    setPathIndex(index);
  };

  return (
    <div className="flex flex-col justify-end">
      <div>
        <ul className="flex cursor-pointe">
          {listItem.map((data, index) => {
            return (
              <>
                <Link
                  to={data.path}
                  onClick={() => handleActive(index)}
                  className={`my-8 m-auto hover:text-pink-500 ${
                    pathIndex === index
                      ? "text-pink-500 border-b-2 border-pink-500"
                      : "text-white"
                  }`}
                >
                  {data.logo}
                  <psan>{data.name}</psan>
                </Link>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default NavigationBar;
