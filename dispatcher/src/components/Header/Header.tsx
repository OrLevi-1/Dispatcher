import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  BlueBar,
  HeaderIcon,
  SearchDiv,
  Iconbar,
  SearchIconMobile,
  Settings,
  Notifications,
  Avatar,
  StyledLink,
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
      <StyledLink to="/">
        <HeaderIcon src={logo} />
      </StyledLink>
      <SearchDiv>
        <SearchBar />
      </SearchDiv>
      <Iconbar>
        <StyledLink to="/search">
          <SearchIconMobile src={searchIcon} />
        </StyledLink>
        <StyledLink to="/nodata">
          <Settings src={settingsIcon} />
        </StyledLink>
        <Notifications src={notifications} />
        <Link to="/login">
          <Avatar src={userAvatar} />
        </Link>
      </Iconbar>
    </BlueBar>
  );
};

export default Header;
