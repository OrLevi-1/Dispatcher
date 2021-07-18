import React from "react";
import { arrow } from "../../assets";
import { BlueBtn, Text, Arrow } from "../../styles/StyledComps";

export interface BtnProps {
  BtnText?: string;
  BtnType?: string;
  onClick?: () => void;
}

export const BtnBlue: React.FC<BtnProps> = ({ BtnText, BtnType }) => {
  return (
    <BlueBtn BtnType={BtnType}>
      <Text>{BtnText}</Text>
      {BtnText !== "Login" && <Arrow src={arrow} />}
    </BlueBtn>
  );
};

export default BtnBlue;
