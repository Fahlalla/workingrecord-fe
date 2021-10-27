import logoOdds from "../Asset/logo-odds.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Summary from "./Summary";

const Menubar = () => {
  const [pathIndex, setPathIndex] = useState();
  const individual = (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2"
    >
      <path d="M3 16H12V21H3V16ZM2 10H8V15H2V10ZM9 10H15V15H9V10ZM16 10H22V15H16V10ZM13 16H21V21H13V16ZM3 4H11V9H3V4ZM12 4H21V9H12V4Z" />
    </svg>
  );
  const history = (
    <svg
      viewBox="0 0 21 18"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2"
    >
      <path d="M12.5 5H11V10L15.28 12.54L16 11.33L12.5 9.25V5ZM12 0C9.61305 0 7.32387 0.948211 5.63604 2.63604C3.94821 4.32387 3 6.61305 3 9H0L3.96 13.03L8 9H5C5 7.14348 5.7375 5.36301 7.05025 4.05025C8.36301 2.7375 10.1435 2 12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9C19 10.8565 18.2625 12.637 16.9497 13.9497C15.637 15.2625 13.8565 16 12 16C10.07 16 8.32 15.21 7.06 13.94L5.64 15.36C7.27 17 9.5 18 12 18C14.3869 18 16.6761 17.0518 18.364 15.364C20.0518 13.6761 21 11.3869 21 9C21 6.61305 20.0518 4.32387 18.364 2.63604C16.6761 0.948211 14.3869 0 12 0Z" />
    </svg>
  );
  const profile = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-2"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clip-rule="evenodd"
      />
    </svg>
  );
  const summary = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 ml-1 mr-1"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M12 2H2.83L8.83 8L2.83 14H12V16H0V14L6 8L0 2V0H12V2Z"
      />
    </svg>
  );

  const menuItem = [
    {
      name: "Individual",
      path: "/individual",
      logo: individual,
    },
    {
      name: "History",
      path: "/history",
      logo: history,
    },
    {
      name: "Profile",
      path: "/profile",
      logo: profile,
    },
    {
      name: "Summary",
      path: "/summary",
      logo: summary,
    },
  ];

  const handleActive = (index) => {
    setPathIndex(index);
  };

  return (
    <div className="flex">
      <div className="h-screen px-10 text-center text-white bg-gray-800">
        <img src={logoOdds} alt="logo" className="mt-6" />
        {menuItem.map((data, index) => {
          return (
            <>
              <Link
                to={data.path}
                onClick={() => handleActive(index)}
                className={`my-8 flex m-auto hover:text-pink-500 ${
                  pathIndex === index
                    ? "text-pink-500 border-b-2 border-pink-500"
                    : "text-white"
                }`}
              >
                {data.logo}
                <span>{data.name}</span>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Menubar;
