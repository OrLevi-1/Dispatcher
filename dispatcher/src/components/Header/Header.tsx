import React from "react";
import styled from "styled-components";
import {
  logo,
  settingsIcon,
  notifications,
  userAvatar,
  searchIcon,
} from "../../assets";

import SearchBar from "../SearchBar/SearchBar";

export interface HeaderProps {}

const BlueBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #262146;

  width: auto;
  height: 74px;
`;

const Iconbar = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 1%;
`;

const LogoIcon = styled.img`
  border-radius: 0px;
  width: 65px;
  height: 50px;
  margin: 0 15px;
  @media (max-width: 850px) {
    width: 65px;
    height: 50px;
  }
`;

const Settings = styled.img`
  border-radius: 0px;
  width: 24px;
  height: 24px;
  padding: 0 5px;
  @media (max-width: 850px) {
    /* width: 30%;
    height: 35%; */
  }
`;

const Notifications = styled.img`
  border-radius: 0px;
  width: 24px;
  height: 24px;
  padding: 0 5px;
  @media (max-width: 850px) {
    /* width: 30%;
    height: 35%; */
  }
`;

const Avatar = styled.img`
  border-radius: 0px;
  width: 50px;
  height: 50px;
  padding: 0 5px;
  @media (max-width: 850px) {
    width: 35px;
    height: 35px;
  }
`;

const SearchIcon = styled.img`
  width: 0px;
  height: 0px;
  @media (max-width: 850px) {
    border-radius: 0px;
    width: 24px;
    height: 24px;
    padding: 0 5px;
  }
`;

const SearchDiv = styled.div`
  margin-left: 10%;
  @media (max-width: 850px) {
    display: none;
  }
`;

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <BlueBar>
      <LogoIcon src={logo} />
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
