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
  width: fit-content;
  padding: 0 50px;
  /* padding-left: 50px; */
  /* border-radius: 15px;
  box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.1); */
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
`;

const Question = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  color: #5a5a89;
`;

const Line = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin: 20px 0px 0px 0px;
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
