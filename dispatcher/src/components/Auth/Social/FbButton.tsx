import React from "react";
import styled from "styled-components";
import "typeface-roboto";
import { fbLogo } from "../../../assets";

export interface FbButtonProps {}

const GreyBtn = styled.button`
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

const Text = styled.h2`
  display: flex;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  color: #5a5a89;
  margin-right: auto;
`;

const Image = styled.img`
  display: flex;
  padding: 0px 0px 0px 10px;
  margin-right: auto;
`;

const FbButton: React.FC<FbButtonProps> = ({}) => {
  return (
    <GreyBtn>
      <Image src={fbLogo} />
      <Text>Continue With Facebook</Text>
    </GreyBtn>
  );
};

export default FbButton;
