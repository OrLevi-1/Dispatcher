import React from "react";
import styled from "styled-components";
import { searchIcon } from "../../assets";
import "typeface-roboto";
import Dropdown from "../Dropdown/Dropdown";

export interface SearchBarProps {}

const Bar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  width: 630px;
  height: 50px;

  @media (max-width: 1000px) {
    width: 500px;
  }
`;

const Input = styled.input`
  height: 42px;
  width: 420px;
  border-color: transparent;
  border-radius: 0px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  line-height: 22px;

  display: flex;
  align-items: center;
  letter-spacing: 0.25px;
  color: #5a5a89;
  &::placeholder {
    color: rgba(90, 90, 137, 0.5);
  }
`;

const SearchIcon = styled.img`
  border-radius: 0px;
  width: 24px;
  height: 24px;
  padding: 0 15px;
`;

const Divider = styled.div`
  width: 40px;
  opacity: 0.8;
  border: 0.5px solid #d9dbe9;
  transform: rotate(90deg);
`;

const SearchBar: React.FC<SearchBarProps> = ({}) => {
  return (
    <Bar>
      <SearchIcon src={searchIcon} />
      <Input placeholder="Search" />
      <Divider />
      <Dropdown />
    </Bar>
  );
};

export default SearchBar;
