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
  StyledLink,
  LogoSearchDiv,
} from "../../styles/StyledComps";
import {
  logo,
  settingsIcon,
  notifications,
  userAvatar,
  searchIcon,
} from "../../assets";

import SearchBar from "../SearchBar/SearchBar";
import MobileSearch from "../MobileSearch/MobileSearch";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const [showSearch, setShowSearch] = useState(false);

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
        <StyledLink to="/search">
          <SearchIconMobile
            src={searchIcon}
            onClick={() => setShowSearch(true)}
          />
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
