import React, { useState } from "react";
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
  LogoSearchDiv,
} from "./StyledHeader";
import {
  logo,
  settingsIcon,
  notifications,
  userAvatar,
  searchIcon,
} from "../../assets";

import SearchBar from "../SearchBar/SearchBar";
import { StyledLink } from "../../styles/StyledComps";

export interface HeaderProps {
  onSearchClick: (isClick: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  return (
    <BlueBar>
      <LogoSearchDiv>
        <StyledLink to="/">
          <HeaderIcon src={logo} />
        </StyledLink>
        <SearchDiv>
          <SearchBar />
        </SearchDiv>
      </LogoSearchDiv>

      <Iconbar>
        <SearchIconMobile
          src={searchIcon}
          onClick={() => onSearchClick(true)}
        />
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
