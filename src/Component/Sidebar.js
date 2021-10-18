import history from "../Asset/icons/history.svg";
import profile from "../Asset/icons/profile.svg";
import individual from "../Asset/icons/wall.svg";
import logo from "../Asset/icons/logo.png";

import styled, { css } from "styled-components";

const activeColor = css`
  ${({ $isActive }) => ($isActive ? "#00B6EF" : "white")}
`;

const Icon = styled.div.attrs({
  className: "inline-block",
})`
  background: ${activeColor};
  -webkit-mask: url(${(props) => props.$icon}) center / contain no-repeat;
  width: 24px;
  height: 24px;
`;

const LinkName = styled.span.attrs({
  className: "ml-2 align-top",
})`
  color: ${activeColor}; ;
`;

const MenuItem = ({ isActive, children, icon }) => {
  return (
    <li className={`px-3 py-2 text-white ${isActive && "bg-gray-900"}`}>
      <a href="/">
        <Icon $icon={icon} alt="" $isActive={isActive} />
        <LinkName $isActive={isActive}>{children}</LinkName>
      </a>
    </li>
  );
};

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="w-full h-screen bg-gray-800 p-4">
        <img src={logo} alt="logo" className="w-24" />
        <ul className="mt-8">
          <MenuItem isActive icon={individual}>
            Individual
          </MenuItem>
          <MenuItem icon={history}>History</MenuItem>
          <MenuItem icon={profile}>Profile</MenuItem>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
