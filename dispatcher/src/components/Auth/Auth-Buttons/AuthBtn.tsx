import React from "react";
import styled from "styled-components";
import "typeface-roboto";
import { arrow } from "../../../assets";

export interface BtnProps {
  BtnText: string;
}

const BlueBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
  border: none;
  background: #0058b9;
  border-radius: 10px;
`;

const Text = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  padding: 0px 15px;
  color: #ffffff;
`;

const Image = styled.img`
  padding: 0 5px;
`;

export const AuthBtn: React.FC<BtnProps> = ({ BtnText }) => {
  return (
    <BlueBtn>
      <Text>{BtnText}</Text>
      {BtnText !== "Login" && <Image src={arrow} />}
    </BlueBtn>
  );
};

export default AuthBtn;
