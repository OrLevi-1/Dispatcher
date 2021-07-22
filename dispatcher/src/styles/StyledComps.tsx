import styled from "styled-components";
import { Colors } from "./Colors";
import "typeface-roboto";
import "typeface-poppins";
import "typeface-mulish";
import { BtnProps } from "../components/Buttons/BtnBlue";
import { DropdownProps } from "../components/Dropdown/Dropdown";
import { Link } from "react-router-dom";

// React Router Dom - Link
export const LoginLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  @media (max-width: 850px) {
    width: 100%;
    padding: 0px;
  }
`;
export const StyledLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  width: auto;
`;
export const AuthPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  min-width: 325px;
  background-color: white;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
