import styled from "styled-components";
import { Colors } from "./Colors";
import "typeface-roboto";

// Auth-button

export const BlueBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  border: none;
  background: ${Colors.blue};
  border-radius: 10px;

  @media (max-width: 850px) {
    width: 100%;
  }
`;
export const Text = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  padding: 0px 15px;
  color: white;
`;
export const Arrow = styled.img`
  padding: 0 5px;
`;

// Form + Register Form

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 450px;
  padding: 0 50px;
  margin: 0 10px 0 10px;
  /* padding-left: 50px; */
  /* border-radius: 15px;
  box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.1); */
  @media (max-width: 850px) {
    padding-right: 0px;
    padding-left: 0px;
    width: auto;
  }
`;
export const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 22px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  letter-spacing: 0.25px;

  color: ${Colors.textDarkBlue};

  @media (max-width: 850px) {
    font-size: 24px;
    justify-content: flex-start;
  }
`;
export const Question = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  color: ${Colors.textDarkBlue};
`;
export const FormLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-top: 20px;

  @media (max-width: 850px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const Divider = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  opacity: 0.5;
  border: 1px solid ${Colors.borderWhite};
  margin: 20px 0px 20px 0px;
`;

// Inputs

export const InputList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Input = styled.input`
  padding: 8px;
  background: white;
  border: 1px solid ${Colors.borderWhite};
  border-radius: 10px;
`;
export const InputText = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  letter-spacing: 0.25px;
  color: ${Colors.textDarkBlue};
`;
export const Asterisk = styled.img`
  width: 2%;
  height: 2%;
  padding: 4px;
  @media (max-width: 850px) {
    width: 5%;
    height: 15%;
    padding: 0px;
  }
`;
export const InputLine = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

// Logo

export const LogoIcon = styled.img`
  border-radius: 0px;
  @media (max-width: 850px) {
    width: 40%;
    height: 60%;
  }
`;
export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.logoBack};
  /* background-size: cover;
  background-repeat: no-repeat; */
  height: 100%;
  width: 35%;

  @media (max-width: 850px) {
    height: 30%;
    width: 100%;
  }
`;

// AuthPage

export const AuthPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  min-width: 325px;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

// Social Buttons

export const GreyBtn = styled.button`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: none;
  background: rgba(217, 219, 233, 0.3);
  border-radius: 10px;
  margin: 0px 0px 20px 0px;
`;
export const ButtonText = styled.h2`
  display: flex;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  color: ${Colors.textDarkBlue};
  margin-right: auto;
`;
export const SocialImage = styled.img`
  display: flex;
  padding: 0px 0px 0px 10px;
  margin-right: auto;
`;

// Dropdown List

export const DropBtn = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  font-family: "Roboto";
  color: ${Colors.textDarkBlue};
  font-size: 1rem;
  height: 50px;
  border: none;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: ${Colors.lightHoverGrey};
  }
  &:focus {
    background-color: ${Colors.lightHoverGrey};
  }
`;
export const DropdownDiv = styled.div`
  position: relative;
  display: inline-block;
`;
export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 10px;

  & a {
    color: #5a5a89;
    font-size: 0.9em;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  &.show {
    display: block;
  }
`;
export const DropdownItem = styled.a`
  background-color: white;
  color: white;
  padding: 16px;
  font-family: "Roboto";
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: ${Colors.darkHoverGrey};
  }
  &:focus {
    background-color: ${Colors.darkHoverGrey};
  }
`;
export const DownArrow = styled.img`
  flex: none;
  order: 2;
  flex-grow: 0;
  margin: 0px 16px;
`;

// Header

export const BlueBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${Colors.logoBack};

  width: auto;
  height: 74px;
`;
export const Iconbar = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 1%;
`;
export const HeaderIcon = styled.img`
  border-radius: 0px;
  width: 65px;
  height: 50px;
  margin: 0 15px;
`;
export const Settings = styled.img`
  border-radius: 0px;
  width: 24px;
  height: 24px;
  padding: 0 5px;
`;
export const Notifications = styled.img`
  border-radius: 0px;
  width: 24px;
  height: 24px;
  padding: 0 5px;
`;
export const Avatar = styled.img`
  border-radius: 0px;
  width: 50px;
  height: 50px;
  padding: 0 5px;
  @media (max-width: 850px) {
    width: 35px;
    height: 35px;
  }
`;
export const SearchIconMobile = styled.img`
  width: 0px;
  height: 0px;
  @media (max-width: 850px) {
    border-radius: 0px;
    width: 24px;
    height: 24px;
    padding: 0 5px;
  }
`;
export const SearchDiv = styled.div`
  margin-left: 10%;
  @media (max-width: 850px) {
    display: none;
  }
`;

// Header - Search

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: white;
  border-radius: 10px;
  width: 630px;
  height: 50px;

  @media (max-width: 1000px) {
    width: 500px;
  }
`;
export const SearchInput = styled.input`
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
  color: ${Colors.textDarkBlue};
  &::placeholder {
    color: ${Colors.inputPlaceholder};
  }
`;
export const SearchIcon = styled.img`
  border-radius: 0px;
  width: 24px;
  height: 24px;
  padding: 0 15px;
`;
export const SearchDivider = styled.div`
  width: 40px;
  opacity: 0.8;
  border: 0.5px solid ${Colors.borderWhite};
  transform: rotate(90deg);
`;
