import logo from "../Asset/OddsLogo.png";
import historyIcon from "../Asset/History.png";
import wallIcon from "../Asset/Wall.png";
import profileIcon from "../Asset/ProfileMenuIcon.png";
import issueProblem from "../Asset/IssueProblem.png";

const MenuItem = (props) => {
  const textColor = props.isActivate ? "#00B6EF" : "#ffffff";
  return (
    <div className="flex ml-2 mb-6">
      <img
        className="w-6 h-6 mr-4"
        src={props.icon ? props.icon : logo}
        alt="img-menu-item"
      ></img>
      <a href="/" style={{ color: textColor }}>
        {props.text}
      </a>
    </div>
  );
};

const Menubar = () => {
  return (
    <div className="h-screen p-4 text-white lg:w-64">
      <img className="mb-10 ml-2 mt-6" src={logo} alt="odds-logo" />
      <MenuItem isActivate={true} text="Individual" icon={wallIcon} />
      <MenuItem text="History" icon={historyIcon} />
      <MenuItem text="Profile" icon={profileIcon} />
      <MenuItem text="Issue Problem" icon={issueProblem} />
    </div>
  );
};

export default Menubar;
