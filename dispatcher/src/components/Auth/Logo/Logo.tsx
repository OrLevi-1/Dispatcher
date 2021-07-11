import React from "react";
import styled from "styled-components";
import { logo } from "../../../assets";

export interface LogoProps {}

const LogoIcon = styled.img`
  border-radius: 0px;
  @media (max-width: 850px) {
    width: 40%;
    height: 60%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #262146;
  /* background-size: cover;
  background-repeat: no-repeat; */
  align-items: center;
  height: 100%;
  width: 35%;

  @media (max-width: 850px) {
    height: 30%;
    width: 100%;
  }
`;

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <Container>
      <LogoIcon src={logo} />
    </Container>
  );
};

export default Logo;
