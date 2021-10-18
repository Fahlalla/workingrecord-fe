import logo from "../Asset/logo.png";
import individual from "../Asset/individual.png";
import history from "../Asset/history.png";
import profile from "../Asset/profileicon.png";

const Menubar = () => {
  return (
    <div className="flex lg:w-64 text-white">
      <div className="absolute left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-gray-900 p-4 transition-transform ease-in-out -translate-x-64">
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Logo */}
          <img className="w-32 pt-6" src={logo} />
        </div>
        <div>
          <ul className="mt-3">
            {/* Individual */}
            <li className="px-3 py-2 rounded-sm mb-0.5 last:mb-0 ">
              <div className="flex flex-grow">
                <svg
                  className="flex-shrink-0 h-6 w-6 mr-3 "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 16H12V21H3V16ZM2 10H8V15H2V10ZM9 10H15V15H9V10ZM16 10H22V15H16V10ZM13 16H21V21H13V16ZM3 4H11V9H3V4ZM12 4H21V9H12V4Z" />
                </svg>

                {/* <img className="flex-shrink-0 h-6 w-6 mr-3" src={individual} /> */}

                <span className="">Individual</span>
              </div>
            </li>
            <li className="px-3 py-2 rounded-sm mb-0.5 last:mb-0">
              <div className="flex flex-grow">
                <svg
                  className="flex-shrink-0 h-6 w-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.5 5H11V10L15.28 12.54L16 11.33L12.5 9.25V5ZM12 0C9.61305 0 7.32387 0.948211 5.63604 2.63604C3.94821 4.32387 3 6.61305 3 9H0L3.96 13.03L8 9H5C5 7.14348 5.7375 5.36301 7.05025 4.05025C8.36301 2.7375 10.1435 2 12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9C19 10.8565 18.2625 12.637 16.9497 13.9497C15.637 15.2625 13.8565 16 12 16C10.07 16 8.32 15.21 7.06 13.94L5.64 15.36C7.27 17 9.5 18 12 18C14.3869 18 16.6761 17.0518 18.364 15.364C20.0518 13.6761 21 11.3869 21 9C21 6.61305 20.0518 4.32387 18.364 2.63604C16.6761 0.948211 14.3869 0 12 0Z" />
                </svg>
                {/* <img className="flex-shrink-0 h-4 w-4 mr-3" src={history} /> */}
                <span className="">History</span>
              </div>
            </li>
            <li className="px-3 py-2 rounded-sm mb-0.5 last:mb-0">
              <div className="flex flex-grow">
                <svg
                  className="flex-shrink-0 h-6 w-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
                {/* <img className="flex-shrink-0 h-6 w-6 mr-3" src={profile} /> */}
                <span className="">Profile</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
