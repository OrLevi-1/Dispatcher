import React from "react";
import {
  BlueBar,
  HeaderIcon,
  SearchDiv,
  Iconbar,
  SearchIcon,
  Settings,
  Notifications,
  Avatar,
} from "../../styles/StyledComps";
import {
  logo,
  settingsIcon,
  notifications,
  userAvatar,
  searchIcon,
} from "../../assets";

import SearchBar from "../SearchBar/SearchBar";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <BlueBar>
      <HeaderIcon src={logo} />
      <SearchDiv>
        <SearchBar />
      </SearchDiv>
      <Iconbar>
        <SearchIcon src={searchIcon} />
        <Settings src={settingsIcon} />
        <Notifications src={notifications} />
        <Avatar src={userAvatar} />
      </Iconbar>
    </BlueBar>
  );
};

export default Header;
