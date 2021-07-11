import styled from "styled-components";
import "typeface-roboto";
import Inputs from "../Inputs/Inputs";
import AuthBtn from "../Auth-Buttons/AuthBtn";
import GoogleBtn from "../Social/GoogleBtn";
import FbButton from "../Social/FbButton";

import React from "react";

export interface FormProps {}

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
`;

const Line = styled.div`
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

const Divider = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  opacity: 0.5;
  border: 1px solid #d9dbe9;
  margin: 20px 0px 20px 0px;
`;

const Form: React.FC<FormProps> = ({}) => (
  <Container>
    <Title>Welcome to Dispatcher</Title>
    <Inputs isLogin={false} />
    <Line>
      <AuthBtn BtnText={"Login"} />
      <Question>Dont have a user yet? Register</Question>
    </Line>
    <Divider />
    <GoogleBtn />
    <FbButton />
  </Container>
);

export default Form;
