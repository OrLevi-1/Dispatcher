import styled from "styled-components";
import "typeface-roboto";
import Inputs from "../Inputs/Inputs";
import { AuthBtn } from "../Auth-Buttons/AuthBtn";

import React from "react";

export interface RegisterFormProps {}

const Container = styled.article`
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

const Title = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 22px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  letter-spacing: 0.25px;

  color: #5a5a89;
  @media (max-width: 850px) {
    font-size: 24px;
    justify-content: flex-start;
  }
`;

const Question = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  color: #5a5a89;
  margin-top: 20px;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 20px 0px 15px 0px;
  @media (max-width: 850px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const RegisterForm: React.FC<RegisterFormProps> = ({}) => (
  <Container>
    <Title>Register</Title>
    <Inputs isLogin={true} />
    <Line>
      <AuthBtn BtnText={"Send Form"} />
      <Question>Already Have A User? Login</Question>
    </Line>
  </Container>
);

export default RegisterForm;
