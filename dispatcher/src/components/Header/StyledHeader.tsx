import styled from "styled-components";
import { Colors } from "../../styles/Colors";

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
  margin-right: 120px;
  margin-left: 16px;
  @media (max-width: 1200px) {
    margin-right: 32px;
  }
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
  @media (max-width: 850px) {
    display: none;
  }
`;
export const LogoSearchDiv = styled.div`
  display: flex;
`;
