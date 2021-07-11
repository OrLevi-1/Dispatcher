import React from "react";
import styled from "styled-components";
import "typeface-roboto";
import { asterisk } from "../../../assets";

export interface InputsProps {
  isLogin?: boolean;
}

const InputList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 8px;
  background: #ffffff;
  border: 1px solid #d9dbe9;
  border-radius: 10px;
`;

const Text = styled.h2`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;

  letter-spacing: 0.25px;
  color: #5a5a89;
`;

const Asterisk = styled.img`
  width: 2%;
  height: 2%;
  padding: 4px;
  @media (max-width: 850px) {
    width: 5%;
    height: 15%;
    padding: 0px;
  }
`;

const Line = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Inputs: React.FC<InputsProps> = ({ isLogin }) => {
  return (
    <InputList>
      {isLogin && (
        <>
          <Line>
            <Text>First Name</Text> <Asterisk src={asterisk} />
          </Line>
          <Input />
          <Line>
            <Text>Last Name</Text> <Asterisk src={asterisk} />
          </Line>
          <Input />
        </>
      )}
      <Line>
        <Text>Email Address</Text> {isLogin && <Asterisk src={asterisk} />}
      </Line>
      <Input />
      <Line>
        <Text>Password</Text> {isLogin && <Asterisk src={asterisk} />}
      </Line>
      <Input />
    </InputList>
  );
};

export default Inputs;
