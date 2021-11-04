import { Link } from "react-router-dom";
import { useState } from "react";

const NavigationBar = () => {
  const [pathIndex, setPathIndex] = useState();
  const list = (
    <button className="py-2 px-6 rounded-t-lg text-gray-500 bg-gray-200 focus:bg-blue-400 focus:text-white ">
      รายการทั้งหมด
    </button>
  );
  const presonMakeList = (
    <button className="py-2 px-6 rounded-t-lg text-gray-500 bg-gray-200 focus:bg-blue-400 focus:text-white">
      คนที่กรอกแล้ว
    </button>
  );
  const noPresonMakeList = (
    <button className="py-2 px-6 rounded-t-lg text-gray-500 bg-gray-200 focus:bg-blue-400 focus:text-white">
      คนที่ยังไม่ได้กรอก
    </button>
  );

  const listItem = [
    {
      name: "ทั้งหมด",
      path: "#",
      logo: list,
    },
    {
      name: "กรอกแล้ว",
      path: "#",
      logo: presonMakeList,
    },
    {
      name: "ยังไม่กรอก",
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
