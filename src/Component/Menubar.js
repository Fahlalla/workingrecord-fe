import { Link, useLocation } from "react-router-dom";
const Menubar = () => {
  const location = useLocation();
  let MenuList = [
    {
      icon:"./Wall.svg",
      pathName: "/individual",
      name: "Individual",
      activePaths: ["/individual"],
    },
    {
      icon:"./History.svg",
      pathName: "/history",
      name: "History",
      activePaths: ["/history"],
    },
    {
      icon:"./Profile.svg",
      pathName: "/profile",
      name: "Profile",
      activePaths: ["/profile"],
    },
    {
      icon:"./Issue.svg",
      pathName: "/issue-problem",
      name: "Issue Problem",
      activePaths: ["/issue-problem"],
    },
  ];
  const isActivePath = (menuIndex, pathname) => {
    return MenuList[menuIndex]?.activePaths
      ? MenuList[menuIndex].activePaths?.includes(pathname)
      : MenuList[menuIndex].pathName === pathname;
  };
  return (
    <div className="flex">
      <div className="fixed h-screen px-10 text-center text-white bg-black">
        <div className="flex flex-col">
          <Link to="/">
            <img
              src="./Odds.svg"
              className="h-14 mx-auto my-8 bg-black"
              alt="logo"
            />
          </Link>
          {MenuList.map((menu, index) => {
            return (
              <Link
                key={`side-bar-${menu.name}`}
                to={menu.pathName}
                className={`text-md text-left pl-5 pr-2 py-5 cursor-pointer ${
                  isActivePath(index, location.pathname)
                    ? "text-blue-500"
                    : "text-white hover:text-blue-500"
                }`}
              >
                <span className="flex">
                  <img
                    src={menu.icon}
                    className={`h-5 mr-5`}
                    alt={`logo-${menu.name}`}
                  />
                  {menu.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menubar;
